import { ReviewModel } from "../models/review-model.js";

// Add a review for a book
export const addReview = async (req, res, next) => {
  try {
    //
    await ReviewModel.create(req.body);
    //
    res.status(201).json("Review added successfully!");
  } catch (error) {
    next(error);
  }
};

// Get a review for a specific book
export const getReviewForBook = async (req, res, next) => {
  try {
    //
    const review = await ReviewModel.findById(req.params.id);
    //
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

// Get all reviews for a specific book
export const getAllReviewsForBook = async (req, res, next) => {
  try {
    //
    const reviews = await ReviewModel.find();
    //
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

// Update a review by ID
export const updateReview = async (req, res, next) => {
 try {
     //
     await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
     //
     res.status(200).json("Review updated!");
 } catch (error) {
    next(error);
 }
};

// Delete a review by ID
export const deleteReview = async (req, res, next) => {
  try {
    //
    await ReviewModel.findByIdAndDelete(req.params.id);
    //
    res.status(201).json("Review deteled!");
  } catch (error) {
    next(error);
  }
};
