import express from "express"
// import { db } from "./models.js"
import { getAll, getById, createDish, deleteDish, createUser, loginUser } from "./queries.js"
import { verifyToken } from "./auth.js";

export const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/create", verifyToken, createDish)
router.delete("/delete", deleteDish)

router.post("/login", loginUser)
router.post("/createUser", createUser)
