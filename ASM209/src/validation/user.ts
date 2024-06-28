import Joi from 'joi'

const userSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(3)
})

export default userSchema
