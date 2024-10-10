import Joi from "joi";

export const reviewValidationSchema = (req, res, next) => {
  const schema = Joi.object({
    rating: Joi.number().required(),
    comment: Joi.string(),
    book: Joi.string(),
  });
  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(422)
      .json({ success: false, message: error.details[0].message });
  next();
};
