import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',()=>{
        console.log("DB connected Successfully");
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/fashion-app`)

}

export default connectDB;