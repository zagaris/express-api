const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  job: Joi.string()
    .min(3)
    .max(30)
    .required(),
});

module.exports = schema;
