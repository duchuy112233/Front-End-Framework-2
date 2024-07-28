import Joi from 'joi'

const schemaProduct = Joi.object({ 
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(3),
  description: Joi.string().required().min(5),
  thumbnail: Joi.string().required().min(5),
  rating: Joi.number().required().min(1).max(5),
  category: Joi.string().required()
})

export default schemaProduct
