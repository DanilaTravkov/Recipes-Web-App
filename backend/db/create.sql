-- psql -d postgres -f db/create.sql

-- WARNING
-- This script will completely delete tables and create them again.
-- Use "path/to/script" to save the current data to a csv file if you have to.

alter table dish drop constraint if exists dish_user_id_fkey;
drop table if exists "user" cascase;
drop table if exists "dish";

create table "user"(
	id serial primary key,
	username varchar(20),
	email varchar(20),
	password varchar(20),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table "dish"(
	id serial primary key,
	title varchar(20),
	descr text,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,
	user_id int references "user"(id)
);