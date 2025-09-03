import Joi from "joi";

const testSchema = Joi.object({    
    name: Joi.string().required().min(3),
    age: Joi.number().required(),
    
});
export default testSchema;