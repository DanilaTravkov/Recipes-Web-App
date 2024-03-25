-- psql -U postgres -d postgres -f db/create.sql

-- WARNING
-- This script will completely delete tables and create them again.
-- Use "path/to/script" to save the current data to a csv file if you have to.

alter table dish drop constraint if exists dish_user_id_fkey;
alter table dish drop constraint if exists dish_ingredients_ingredient_id_fkey;
alter table dish drop constraint if exists dish_ingredients_dish_id_fkey;
drop table if exists "user" cascade;
drop table if exists "dish" cascade;
drop table if exists "ingredients" cascade;
drop table if exists "dish_ingredients" cascade;

create table "user"(
	id serial primary key,
	username varchar(20),
	email varchar(20),
	password varchar(200),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table "dish"(
	id serial primary key,
	title varchar(20),
	descr text,
	img_link varchar(255),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,
	user_id int references "user"(id)
);

create table "ingredients"(
	id serial primary key,
	name varchar(20)
);

create table "dish_ingredients"(
	id serial primary key,
	ingredient_id int references "ingredients"(id),
	dish_id int references "dish"(id)
);