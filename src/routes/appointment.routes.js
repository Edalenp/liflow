import express from 'express';
import { createAppointment, getMyAppointments, getPendingDonations } from '../controllers/appointment.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/pending-donations', requireAuth(['medical_staff']), getPendingDonations);
router.post('/', requireAuth(['donor']), createAppointment);
router.get('/me', requireAuth(['donor']), getMyAppointments);


export default router;