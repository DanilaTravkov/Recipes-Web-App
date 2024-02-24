import { config } from 'dotenv';
import pgPromise from 'pg-promise';
import { redisClient } from '.';
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
		const dishsFromRedis = await redisClient.hGetAll("allDishes", "key")
		if (dishsFromRedis) {
			res.send(dishsFromRedis);
		} else {
			const dishsFromDb = await db.any('select * from dish');
			await redisClient.hSet("allDishes", "key", JSON.stringify(dishsFromDb));
			await redisClient.expire("allDishes", 3600);
			res.send(dishsFromDb);
		}
	} catch (error) {
		console.log(error)
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
