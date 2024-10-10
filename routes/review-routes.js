import { Router } from "express";
import { addReview, deleteReview, getAllReviewsForBook, getReviewForBook, updateReview } from "../controllers/reviews-controllers.js";
import { reviewValidationSchema } from "../validators/validate-review.js";




const reviewRouter = Router();

//add all routes
reviewRouter.post("/reviews", reviewValidationSchema, addReview);
reviewRouter.get("/reviews/:id", getReviewForBook);
reviewRouter.get("/reviews",  getAllReviewsForBook);
reviewRouter.patch("/reviews/:id", reviewValidationSchema, updateReview);
reviewRouter.delete("/reviews/:id", deleteReview);

export default reviewRouter
