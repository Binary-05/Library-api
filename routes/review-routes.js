import { Router } from "express";
import { addReview, deleteReview, getAllReviewsForBook, getReviewForBook, updateReview } from "../controllers/reviews-controllers.js";
import { reviewValidationSchema } from "../middleware/validate-review.js";



const reviewRouter = Router();

//add all routes
reviewRouter.post("/review", reviewValidationSchema, addReview);
reviewRouter.get("/review/:id", getReviewForBook);
reviewRouter.get("/reviews",  getAllReviewsForBook);
reviewRouter.patch("/review/:id", reviewValidationSchema, updateReview);
reviewRouter.delete("/review/:id", deleteReview);

export default reviewRouter
