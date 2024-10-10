import { Router } from "express";
import { addAuthor, deleteAuthorInfo, getAllAuthors, getAuthor, updateAuthorInfo } from "../controllers/author-controllers.js";
import { authorValidationSchema } from "../validators/validate-author.js";

//
const authorRouter = Router();

//
authorRouter.post("/authors", authorValidationSchema, addAuthor);

authorRouter.get("/authors/:id", getAuthor);

authorRouter.get("/authors", getAllAuthors);

authorRouter.patch("/authors/:id", authorValidationSchema, updateAuthorInfo);

authorRouter.delete("/authors/:id", deleteAuthorInfo);

//
export default authorRouter
