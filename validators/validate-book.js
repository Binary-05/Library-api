import Joi from "joi";

export const bookValidationSchema = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    cover: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().required(),
    genre: Joi.string().required(),
    content: Joi.string().required(),
    description: Joi.string().required(),
  })

  const { error } = schema.validate(req.body);
  if (error) return res.status(422).json({ success: false, message: error.details[0].message });
  next();
}
