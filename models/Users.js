const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Regex: At least 8 characters, one letter, one digit, and one special character
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters long, include at least one letter, one digit, and one special character (@$!%*?&)'
        }
    },
    username: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);
