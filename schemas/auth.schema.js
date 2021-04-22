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
        location: joi.string().required(),
        file: {
            profile_photo: joi.string().required()
        }
    }),
    login: joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    }),
    like: joi.object().keys({
        user_id: joi.string().required(),
        liked_id: joi.string().required(),
        match: joi.number().required()
    }),
    dislike: joi.object().keys({
        user_id: joi.string().required(),
        disliked_id: joi.string().required()
    }),
}

module.exports = Schema;
