import express from "express"
import cors from 'cors'
import { router } from './routes.js';
import { config } from "dotenv";
import { createClient } from 'redis'
config();

export const app = express()

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST
const corsOptions = {
	origin: [`http://${host}:${port}`]
}

export const redisClient = createClient();

redisClient.on('error', err => console.log("Redis Client Error:", err));

await redisClient.connect();

app.use(express.json())
app.use(cors(corsOptions))
app.use("/v1", router)

app.listen(port, () => {
	console.log(`Server running at ${port}`)
})

