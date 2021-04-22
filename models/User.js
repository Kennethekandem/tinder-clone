const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: String,
    password: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    location: String,
    profile_photo: String,
    likes: [{
        user_id: { type: String },
        liked_id: { type: String },
        match: { type: String }
    }]
})

module.exports = mongoose.model("User", schema)
