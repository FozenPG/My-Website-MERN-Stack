import express from "express"
import userRoute from "./src/routes/user.route.js"
import connectDB from "./src/database/db.js"

connectDB()
const app = express()
const port = 3000

app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Server run at port: ${port}`))