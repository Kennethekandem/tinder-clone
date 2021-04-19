const Joi = require('joi')

const schemas = {
    create: Joi.object().keys({
        body: Joi.string().required(),
        title: Joi.string().required()
    }),
    find: Joi.object().keys({
        id: Joi.string().required()
    })
}
module.exports = schemas;
