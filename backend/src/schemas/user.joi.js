import Joi from 'joi';

const userSchema = Joi.object({
    discordId: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
})

export default userSchema;