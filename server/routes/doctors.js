import express from 'express'
import { updateDoctor, deleteDoctor,getSingleDoctor,getAllDoctor, getDoctorProfile } from '../controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

import reviewRoute from './review.js'

const router = express.Router();

// nested route

router.use('/:doctorId/reviews', reviewRoute)

router.put("/:id", authenticate, restrict(['doctor']),updateDoctor);
router.delete("/:id",authenticate, restrict(['doctor']), deleteDoctor);
router.get('/:id', getSingleDoctor);
router.post('/', getAllDoctor)
router.get("/profile/me",authenticate, restrict(['doctor']), getDoctorProfile);


export default router