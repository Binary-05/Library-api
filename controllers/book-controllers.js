import { BookModel } from "../models/book-model.js";

export const addBook = async (req, res, next) => {


  try {
    // Write to database
    await BookModel.create(req.body);
    // const newbook = new Book(req.body)
    // await book.save()
    // Response to request
    res.status(201).json("Book was added");
  } catch (error) {
    next(error);

  }
}

export const getAllBooks = async (req, res, next) => {


  try {
    // Fetch books from database
    const books = await BookModel.find();
    // Return Response
    res.status(200).json(books);
  } catch (error) {
    next(error);

  }
}

export const getBookById = async (req, res, next) => {


  try {
    // Fetch a book for database
    const book = await BookModel.findById(req.params.id);
    // Return Response
    res.status(201).json(book);
  } catch (error) {
    next(error);

  }
}

export const updateBook = async (req, res, next) => {


  try {
    const books = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(books);
  } catch (error) {
    next(error);

  }
}

export const deleteBook = async (req, res, next) => {


  try {
    await BookModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Book was deleted!");
  } catch (error) {
    next(error)

  }
}