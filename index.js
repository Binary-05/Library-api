import express from "express";
import mongoose from "mongoose";
import authorRouter from "./routes/author-routes.js";
import bookRouter from "./routes/book-routes.js";
import cors from "cors";
import reviewRouter from "./routes/review-routes.js";


// Connect to databsse
await mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database connected successfully"))
.catch((error)=>console.log("Error connecting to database", error))


// Create an express app
const app = express();


// Use middlewares
app.use(express.json());
app.use(cors());
app.use(express.json())


app.use(bookRouter);
app.use(authorRouter);
app.use(reviewRouter);


// Listening for income request
app.listen(7979, () => {
    console.log("App is listening on port 7979");
}) 
