const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  specialization: { type: String, enum: ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Psychiatrist'], required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  slots: { type: Number, required: true },
  fee: { type: Number, required: true },
});

const DoctorModel = mongoose.model('Doctor', doctorSchema);

module.exports = {DoctorModel};
