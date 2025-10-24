import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/dailyCommit`);
        console.log("Connected to Database sucessfully!!");
    } catch (error) {
        console.log("Connection not build to Database. Some error: ",error)
    }
}

export default connectDB;