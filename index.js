const express = require("express")
const userRoute = require("./src/routes/user.route")
const db = require("./src/database/db")

db()
const app = express()
const port = 3000

app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Server run at port: ${port}`))