import Router from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book-controllers.js";
import { bookValidatioinSchema } from "../middleware/validate-book.js";


// create a Router
const bookRouter = Router();


// Define routes
bookRouter.post("/books", bookValidatioinSchema, addBook);

bookRouter.get("/books", getAllBooks);

bookRouter.get("/books/:id", getBookById);

bookRouter.patch("/books/:id", bookValidatioinSchema, updateBook);

bookRouter.delete("/books/:id", deleteBook);


export default bookRouter