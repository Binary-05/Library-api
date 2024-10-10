import Router from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book-controllers.js";
import { bookValidationSchema } from "../validators/validate-book.js";
import { model } from "mongoose";



// create a Router
const bookRouter = Router();

// Define search rount
bookRouter.get("/serach", async (req, res, next) =>{
const { title, author, genre } = req.query;

let filter = {};

if (title) {
    filter.title = { $regex: new RegExp(title, "i")};
}
if (author) {
    filter.author = { $regex: new RegExp(author, "i")};
}
if (genre) {
    filter.genre ={ $regex: new RegExp(genre, "i")};
}
try {
    const books = await BookModel.find(filter);
    res.status(200).json(books);
} catch (error) {
    res.status(500).json({error: "An error occurred while searching for books"});
}

})

// Define routes
bookRouter.post("/books", bookValidationSchema, addBook);

bookRouter.get("/books", getAllBooks);

bookRouter.get("/books/:id", getBookById);

bookRouter.patch("/books/:id", bookValidationSchema, updateBook);

bookRouter.delete("/books/:id", deleteBook);


export default bookRouter