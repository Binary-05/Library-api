import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
    title : {
        type: String,
        // required: true
    },

    cover : {
        type: String
    },

    author : {
        type: Types.ObjectId,
        ref: "Author",
        // required: true
    },

    year : {
        type: Number,
        // required: true
    },

    genre : {
        type: String,
        // required: true
    },

    description : {
        type: String,
        // required: true
    },
})

export const BookModel = model("book", bookSchema);