const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, default: Date.now },
  patientName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  notes: { type: String },
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = {AppointmentModel};
