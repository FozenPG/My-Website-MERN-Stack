const route = require("express").Router()
const userController = require("../controllers/user.controller")

route.post("/", userController.create)
route.get("/", userController.findAll)
route.get("/:id", userController.findById)

module.exports = route

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