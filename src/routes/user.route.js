import express from "express"
import userController from "../controllers/user.controller.js"
import {validId, validUser} from "../middlewares/global.middlewares.js"

const router = express.Router()

router.post("/", userController.create)
router.get("/", userController.findAll)
router.get("/:id", validId, validUser ,userController.findById)
router.patch("/:id", validId, validUser ,userController.update)

export default router

/*
{
  "name": "jose",
  "username": "josesilva",
  "email": "josesilva33@gmail.com",
  "password": "12345",
  "avatar": "https://avatars.githubusercontent.com/u/124454804?v=4",
  "background": "https://i.imgur.com/12w6KHf.png"
}
*/