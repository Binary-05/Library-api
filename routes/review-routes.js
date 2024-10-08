import { Router } from "express";
import { addReview, deleteReview, getAllReviewsForBook, getReviewForBook, updateReview } from "../controllers/reviews-controllers.js";



const reviewRouter = Router();

//add all routes
reviewRouter.post("/review", addReview);
reviewRouter.get("/review/:id", getReviewForBook);
reviewRouter.get("/reviews",  getAllReviewsForBook);
reviewRouter.patch("/review/:id", updateReview);
reviewRouter.delete("/review/:id", deleteReview);

export default reviewRouter
