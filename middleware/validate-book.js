import Joi from "joi";

export const bookValidatioinSchema = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().required(),
    genre: Joi.string().required(),
    description: Joi.string().required(),
  })

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });
  next();
}
