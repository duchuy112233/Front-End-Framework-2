import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().required().min(5).messages({
    'string.empty': 'Username không được để trống',
    'string.min': 'Username phải dài ít nhất 5 ký tự',
  }),
  email: Joi.string().required().email({ tlds: false }).messages({
    'string.empty': 'Email không được để trống',
    'string.email': 'Email không hợp lệ',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Password không được để trống',
    'string.min': 'Password phải dài ít nhất 6 ký tự',
  }),
});

const userLoginSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }).messages({
    'string.empty': 'Email không được để trống',
    'string.email': 'Email không hợp lệ',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Password không được để trống',
    'string.min': 'Password phải dài ít nhất 6 ký tự',
  }),
});

export { userSchema, userLoginSchema };
