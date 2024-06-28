import Joi from 'joi'

const schemaProduct = Joi.object({ 
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(3),
  description: Joi.string().required().min(5),
  thumbnail: Joi.string().required().min(5)
})

export default schemaProduct
