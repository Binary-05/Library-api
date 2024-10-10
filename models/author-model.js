import { Schema, model } from "mongoose";

const authorSchema = new Schema({

    author: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: false
    }
})

export const AuthorModel = model("Author", authorSchema)