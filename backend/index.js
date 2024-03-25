import express from "express"
import cors from 'cors'
// import { createClient } from "redis";
import { router } from './routes.js';
import { config } from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import cookieParser from 'cookie-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

export const app = express()

const port = process.env.CLIENT_PORT
const host = process.env.CLIENT_HOST

const corsOptions = {
	origin: `http://${host}:${port}`,
	credentials: true
};


// export const redisClient = createClient({
// 	password: process.env.REDIS_PASSWORD,
// 	socket: {
// 		host: process.env.REDIS_HOST,
// 		port: process.env.REDIS_PORT
// 	}
// });

// redisClient.on('error', err => console.log("Redis Client Error:", err));

// await redisClient.connect();

app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOptions))
app.use("/v1", router)

app.listen(3000, () => {
	console.log("Server running at 3000")
})

