import express from "express";
import mongoose from "mongoose";
import { bookRouter } from "./routes/book-routes.js";
import authorRouter from "./routes/author-routes.js";


// Connect to databsse
await mongoose.connect(process.env.MONGO_URI);


// Create an express app
const app = express();


app.use(bookRouter);
app.use(authorRouter);

// Listening for income request
app.listen(7979, () => {
    console.log("App is listening on port 7979");
}) 