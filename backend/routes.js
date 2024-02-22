import express from "express"

export const router = express.Router()

router.get("/", (req, res) => {
	res.send("Home page")
})

router.post("/post", (res, req) => {
	
})

