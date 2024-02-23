import express from "express"
import { db } from "./models.js"

export const router = express.Router()

router.get("/", (req, res, next) => {
	db.any('select * from pups').then(data => {
		console.log("Data fetched successfully from db")
		console.log(data)
		res.send("Success")
		next()
	})
	.catch(error => {
		console.log(error)
		next()
	})
})

