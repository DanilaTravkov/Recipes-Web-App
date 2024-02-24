import express from "express"
import cors from 'cors'
import { router } from './routes.js';
import { config } from "dotenv";
config();

export const app = express()
const port = process.env.SERVER_PORT
const corsOptions = {
	origin: [`http://${process.env.SERVER_HOST}:${port}`]
}

app.use(express.json())
app.use(cors(corsOptions))
app.use("/v1", router)

app.listen(port, () => {
	console.log(`Server running at ${port}`)
})

