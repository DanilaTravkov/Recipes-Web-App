import { config } from 'dotenv';
import pgPromise from 'pg-promise';

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
		const dishs = await db.any('select * from dish')
		res.send(dishs)
	} catch (error) {
		console.log(error)
	}
}

export async function getById(req, res, next) {
	try {
		const dish = await db.any('select * from dish where id = $1', req.params.id)
		res.send(dish)
	} catch (error) {
		console.log(error)
	}
}

export async function createDish(req, res, next) {
	try {
		const {title, descr} = req.body
		const newDish = await db.one('insert into dish (title, descr) values ($1, $2) returning id', [title, descr])
		console.log(`A new dish with id ${newDish.id} has been created`)
	} catch (error) {
		console.log(error)
	}
}

