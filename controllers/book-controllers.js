import { BookModel } from "../models/book-model.js";

export const addBook = async (req, res, next) => {


   try {


     res.status(201).json("Book has been added!");
   } catch (error) {
    next(error);
    
   }
}

export const getAllBooks = async (req, res, next) => {


    try {


        res.status(200).json("All books!");
    } catch (error) {
        next(error);
        
    }
}

export const getBookById = async (req, res, next) => {


  try {
    
      res.status(2001).json("Book found");
  } catch (error) {
    next(error);
    
  }
}

export const updateBook = async (req, res, next) => {


    try {


        res.status(200).json("Book updated successfully!");
    } catch (error) {
        next(error);
        
    }
}

export const deleteBook = async (req, res, next) => {


   try {


     res.status(200).json("Book has been deleted!");
   } catch (error) {
    next(error)
    
   }
}