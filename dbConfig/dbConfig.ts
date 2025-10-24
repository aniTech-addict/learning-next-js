import mongoose from "mongoose";

export function connectDB(){
    
    try{
        mongoose.connect(process.env.MONGODB_URI!);
    }catch(err){
        console.log("DB Connection Error:", err);
    }
    
    mongoose.connection.on("connected", ()=>{
        console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err)=>{
        console.log("MongoDB connection error:", err);
    });
}