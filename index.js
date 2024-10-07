import express from "express";
import mongoose from "mongoose";
import { bookRouter } from "./routes/admin-routes.js";



// Create an express variable
const liapp = express();


liapp.use(bookRouter);

// Listening for income request
liapp.listen(7979, () => {
    console.log("App is listen on port 7979");
}) 