const joi = require('joi');

const Schema = {
    register: joi.object().keys({
        name: joi.string().required(),
        email: joi.string().email().lowercase().required(),
        phone: joi.string().min(10).max(11).required(),
        password: joi.string().min(6).required(),

        // Other requirements
        age: joi.number().required(),
        gender: joi.string().required(),
        location: joi.string().required()
    }),
    login: joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    })
}

module.exports = Schema;
