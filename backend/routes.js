import express from "express"
// import { db } from "./models.js"
import { getAll, getById, createDish, deleteDish } from "./queries.js"

export const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/create", createDish)
router.delete("/delete", deleteDish)
