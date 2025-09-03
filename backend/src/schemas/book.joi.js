import Joi from "joi";

const bookSchema = Joi.object({
  title: Joi.string().required().min(3),
  type: Joi.string().required(),
  year: Joi.number().required(),
  origin: Joi.string().valid("oficial", "homebrew"),
  author: Joi.string().optional(),
  notes: Joi.string().optional(),
  publisher: Joi.string().optional().default("Jambô Editora"),
  isbn: Joi.string().optional(),
  description: Joi.string().required(),
  operator: Joi.string().required(),
});

export default bookSchema;
