import { Router } from "express";
import { addAuthor, deleteAuthorInfo, getAllAuthors, getAuthor, updateAuthorInfo } from "../controllers/author-controllers.js";
import { authorValidationSchema } from "../middleware/validate-author.js";

//
const authorRouter = Router();

//
authorRouter.post("/author", authorValidationSchema, addAuthor);

authorRouter.get("/author/:id", getAuthor);

authorRouter.get("/authors", getAllAuthors);

authorRouter.patch("/author/:id", authorValidationSchema, updateAuthorInfo);

authorRouter.delete("/author/:id", deleteAuthorInfo);

//
export default authorRouter
