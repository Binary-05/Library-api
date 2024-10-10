import Router from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book-controllers.js";
import { bookValidationSchema } from "../validators/validate-book.js";



// create a Router
const bookRouter = Router();


// Define routes
bookRouter.post("/books", bookValidationSchema, addBook);

bookRouter.get("/books", getAllBooks);

bookRouter.get("/books/:id", getBookById);

bookRouter.patch("/books/:id", bookValidationSchema, updateBook);

bookRouter.delete("/books/:id", deleteBook);


export default bookRouter