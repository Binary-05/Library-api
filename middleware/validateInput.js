import { required } from "joi";

const joi = required("joi");


const bookSchema = joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    Year: Joi.number().required(),
    genre: Joi.string().required(),
    discription: Joi.string().required()
})

exports.validateBook = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
  if (error) return res.status(400).json(false, error.details[0].message );
  next();
}