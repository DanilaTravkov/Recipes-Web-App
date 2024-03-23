import express from "express"
import cors from 'cors'
// import { createClient } from "redis";
import { router } from './routes.js';
import { config } from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

export const app = express()

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

const corsOptions = {
	origin: `http://${host}:${port}`,
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: [
	  "Content-Type",
	  "Authorization",
	  "Access-Control-Allow-Credentials",
	],
};
  
app.use(cors(corsOptions));

// export const redisClient = createClient({
// 	password: process.env.REDIS_PASSWORD,
// 	socket: {
// 		host: process.env.REDIS_HOST,
// 		port: process.env.REDIS_PORT
// 	}
// });

// redisClient.on('error', err => console.log("Redis Client Error:", err));

// await redisClient.connect();

app.use(express.json())
app.use(cors(corsOptions))
app.use("/v1", router)

app.listen(port, () => {
	console.log(`Server running at ${port}`)
})

