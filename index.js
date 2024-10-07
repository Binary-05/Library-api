import express from "express";
import mongoose from "mongoose";
import { bookRouter } from "./routes/book-routes.js";


// Connect to databsse
await mongoose.connect(process.env.MONGO_URI);


// Create an express variable
const app = express();


app.use(bookRouter);

// Listening for income request
app.listen(7979, () => {
    console.log("App is listen on port 7979");
}) 