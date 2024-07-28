import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().min(5),
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(3)
});

const userLoginSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(3)
});

export { userSchema, userLoginSchema };
