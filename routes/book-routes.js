import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book-controllers.js";


// create a Router
export const bookRouter = Router();


// Define routes
bookRouter.post("/books", addBook);

bookRouter.get("/books", getAllBooks);

bookRouter.get("/books/:id", getBookById);

bookRouter.patch("/books/:id", updateBook);

bookRouter.delete("/books/:id", deleteBook);