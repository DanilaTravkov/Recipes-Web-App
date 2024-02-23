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

