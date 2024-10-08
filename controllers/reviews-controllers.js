const Review = required ("../ model/reviews-models.js");
const book = required (" ../models/reviews-models.js");
// add a review to a book 
const addReviews = async ( req, res, next) => {
    const { bookId, rating, comment} = req.body ;


    res.status(201).json({ message: "successfully" });
}
