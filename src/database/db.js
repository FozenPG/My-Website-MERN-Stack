import mongoose from "mongoose"

const connectDB = () => {
    console.log("Connecting to database...")

    mongoose.connect("mongodb+srv://root:12344321@cluster0.uvzqzr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log("MongoDB Atlas Connected!"))
        .catch((error) => console.log(error))
}

export default connectDB