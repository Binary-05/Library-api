import { AuthorModel } from "../models/author-model.js";

export const addAuthor = async (req, res, next) => {
    try {
        // 
        await AuthorModel.create(req.body)
        // 
        res.status(201).json("Author was added!");
    } catch (error) {
        next(error);
    }
}

export const getAuthor = async (req, res, next) => {
    try {
        // 
        const author = await AuthorModel.findById(id)
        //
        res.status(200).json(author)
    } catch (error) {
        next(error);
    }
}

export const getAllAuthors = async (req, res, next) => {
    try {
        // 
        const authors = await AuthorModel.find()
        //
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}

export const updateAuthorInfo = async (req, res, next) => {
    try {
        const {id, update} = req.body
        //Grab the author id and update
        // 
        await AuthorModel.findByIdAndUpdate(id, update)
        //
        res.status(200).json("Update successful!")
    } catch (error) {
        next(error);
    }

}

export const deleteAuthorInfo = async (req, res, next) => {
    try {
        // 
        await AuthorModel.findByIdAndDelete(id)
        //
        res.status(200).json("Delete successful!")
    } catch (error) {
        next(error);
    }
}  
