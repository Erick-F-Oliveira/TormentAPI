import Joi from "joi";

const weaponSchema = Joi.object({
  name: Joi.string().required().min(3),
  proficiency: Joi.string().required(),
  proposite: Joi.string().required(),
  hilt: Joi.string().required(),
  price: Joi.number().required(),
  baseDamage: Joi.string().required(),
  criticalDamage: Joi.string().required(),
  typeOfDamage: Joi.string().required(),
  reach: Joi.string().required(),
  space: Joi.number().required(),
  origin: Joi.string().valid("oficial", "homebrew"),
  author: Joi.string().optional().default("Jambô Editora"),
  reference: Joi.string().required(),
  page: Joi.number().optional(),
  operator: Joi.string().required(),
});
export default weaponSchema;
