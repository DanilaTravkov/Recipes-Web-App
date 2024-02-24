import express from "express"
// import { db } from "./models.js"
import { getAll, getById, createDish } from "./models.js"

export const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/create", createDish)

