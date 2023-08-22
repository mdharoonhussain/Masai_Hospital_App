const express = require('express');
const {DoctorModel} = require('../model/doctor.model');
const {AppointmentModel} = require("../model/appointment.model")
const doctorRouter = express.Router();

doctorRouter.post('/create', async (req, res) => {
  try {
    const newDoctor = await DoctorModel.create(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

doctorRouter.get('/', async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


doctorRouter.post('/appointments', async (req, res) => {
    try {
      const { doctorId, patientName, contactNumber, notes } = req.body;
  
      const doctor = await DoctorModel.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      const newAppointment = await AppointmentModel.create({
        doctor: doctorId,
        patientName,
        contactNumber,
        notes,
      });
  
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = {doctorRouter};
