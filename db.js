import mongoose, { Mongoose, MongooseError } from "mongoose";

const connectDB = async () => {
    try {

    await mongoose.connect(process.env.MONGO_URI)
    console.log(`successfully connected to MongoDB 😃`)

    } catch (error) {
        console.error(`ERROR :${error.message}`)
        process.exit(1)
    }
}