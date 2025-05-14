const express = require("express")
const userRoute = require("./src/routes/user.route")

const app = express()
const port = 3000

app.use("/user", userRoute)

app.listen(port, () => console.log(`Server run at port: ${port}`))