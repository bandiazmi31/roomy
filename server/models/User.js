const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {type: String, Enum: ['user', 'admin'], default: 'user'}
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel