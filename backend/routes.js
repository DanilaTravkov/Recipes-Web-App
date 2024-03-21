import express from "express"
// import { db } from "./models.js"
import { getAll, getById, createDish, deleteDish, createUser } from "./queries.js"
import {  authenticateToken } from "./auth.js";

export const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/create", authenticateToken, createDish)
router.delete("/delete", deleteDish)

router.post("/createUser", createUser)
