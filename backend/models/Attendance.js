const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lecturer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['present','absent'], default: 'absent' },
  timestamp: { type: Date, default: Date.now },
  location: {
    latitude: { type: Number },
    longitude: { type: Number }
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
