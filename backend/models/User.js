const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'lecturer', 'student'], required: true },
  photo: { type: String } // store base64 string or URL
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
