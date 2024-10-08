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
        const author = await AuthorModel.findById(req.params.id)
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
        // 
        await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //
        res.status(200).json("Update successful!")
    } catch (error) {
        next(error);
    }

}

export const deleteAuthorInfo = async (req, res, next) => {
    try {
        // 
        await AuthorModel.findByIdAndDelete(req.params.id);
        //
        res.status(200).json("Delete successful!")
    } catch (error) {
        next(error);
    }
}  
