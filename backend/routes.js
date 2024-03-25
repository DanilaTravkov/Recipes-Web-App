import express from "express"
// import { db } from "./models.js"
import { getAll, getById, createDish, deleteDish, createUser, loginUser } from "./queries.js"
import { checkAccess } from "./auth.js";

export const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/createDish", checkAccess, createDish)
router.delete("/deleteDish", checkAccess, deleteDish)

router.post("/login", loginUser)
router.post("/createUser", createUser)
