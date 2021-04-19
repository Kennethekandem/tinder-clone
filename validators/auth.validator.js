const joi = require('joi');

const Schema = {
    register: joi.object().keys({
        name: joi.string().required(),
        email: joi.string().email().lowercase().required(),
        phone: joi.number().min(10).max(11).required()
        password: joi.string().min(6).required(),

        // Other requirements
        age: joi.number().max(2).required(),
        gender: joi.string().max(1).required(),
        location: joi.string().required()
    });
}
