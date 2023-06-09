const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    password: { type: String, hide: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

userSchema.set('toObject');
userSchema.set('toJSON');
module.exports = mongoose.model('users', userSchema);
