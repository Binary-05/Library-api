import { Schema, Types } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: { type: string},
    book: { type: Types.obejectid, ref: 'review'},
    user: { type: Types.ObjectId, ref: 'user'},
})

export const ReviewSchema = model('Review', reviewSchema)