import pgPromise from 'pg-promise';
// import { redisClient } from './index.js';
import bcrypt from 'bcrypt';

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

const pgp = pgPromise();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connectionOptions = {
  host: dbHost,
  port: dbPort,
  database: 'postgres',
  user: dbUser,
  password: dbPassword,
};

export const db = pgp(connectionOptions);

export async function getAll(req, res, next) {
	try {
		// const dishesFromRedis = await redisClient.hGet("allDishes", "key");

		// if (dishesFromRedis) {
		// 	console.log("Received response from Redis");
		// 	res.send(dishesFromRedis);
		// } else {
			const dishesFromDb = await db.any('select * from dish');

			const dishesFromDbString = JSON.stringify(dishesFromDb)
			// await redisClient.hSet("allDishes", "key", dishesFromDbString);

			console.log("Received response from DB");
			res.send(dishesFromDb);
		// }
	} catch (error) {
		console.log(error);
	} finally {
		// await redisClient.expire("allDishes", 3600);
	}
}


export async function getById(req, res, next) {
	try {
		const id = req.params.id;
		const dish = await db.any('select * from dish where id = $1', id);
		res.send(dish);
	} catch (error) {
		console.log(error)
	}
}

export async function createDish(req, res, next) {
	try {
		const {title, descr} = req.body;
		const newDish = await db.one('insert into dish (title, descr) values ($1, $2) returning id', [title, descr]);
		console.log(`Successfully created a dish with id: ${newDish.id}`);
	} catch (error) {
		console.log(error);
	}
}

export async function deleteDish(req, res, next) {
  try {
    const id = req.query.id;
    const result = await db.result('delete from dish where id = $1', id);
    console.log(`Successfully deleted a dish`);
    res.status(200).send("Dish deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

export async function loginUser(req, res, next) {
	const { username, password } = req.body;
	try {
		// Assuming you have a users table with username and password columns
		const user = await db.one('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch)
			return res.status(401).json({ message: 'Invalid credentials' });
		const token = createToken({ id: user.id, username: user.username });
		res.json({ token });
	} catch (error) {
		console.error('Error logging in:', error);
    	res.status(401).json({ error: 'Invalid credentials' });
	}
};

export async function createUser(req, res, next) {
	const { username, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, hashedPassword]);
		res.status(201).json({message: "User created", userId: newUser.id})
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error when creating a user "})
	}
};
