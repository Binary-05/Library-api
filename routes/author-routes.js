import { Router } from "express";
import { addAuthor, deleteAuthorInfo, getAllAuthors, getAuthor, updateAuthorInfo } from "../controllers/author-controllers.js";


//
const authorRouter = Router();

//
authorRouter.post("/author", addAuthor);

authorRouter.get("/author/:id", getAuthor);

authorRouter.get("/authors", getAllAuthors);

authorRouter.patch("author/:id", updateAuthorInfo);

authorRouter.delete("author/:id", deleteAuthorInfo);

//
export default authorRouter
