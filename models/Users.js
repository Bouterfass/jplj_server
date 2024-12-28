const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        validate: true,
        validate: {
            validator: function(value) {
                return value.length >= 8; // Ensures the password has at least 8 characters
            },
            message: 'Password should be at least 8 characters long'
        }
    },
    username: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', UserSchema);