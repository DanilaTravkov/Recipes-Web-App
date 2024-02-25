import { config } from 'dotenv';
import pgPromise from 'pg-promise';
import { redisClient } from './index.js';
config();

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
		const startTimeDb = new Date();
		const dishesFromDb = await db.any('select * from dish');
		const endTimeDb = new Date();
		const dbTimeDifference = endTimeDb - startTimeDb;

		const startTimeRedis = new Date();
		const dishesFromRedis = await redisClient.hGet("allDishes", "key");
		const endTimeRedis = new Date();
		const redisTimeDifference = endTimeRedis - startTimeRedis;

		if (Object.keys(dishesFromRedis).length > 0) {
			console.log("Received response from Redis");
			console.log("Time taken by Redis: " + redisTimeDifference + " milliseconds");
			res.send(dishesFromRedis);
		} else {
			await redisClient.hSet("allDishes", "key", dishesFromDb);
			await redisClient.expire("allDishes", 3600);

			console.log("Received response from DB");
			console.log("Time taken by DB: " + dbTimeDifference + " milliseconds");

			res.send(dishesFromDb);
		}
	} catch (error) {
		console.log(error);
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
