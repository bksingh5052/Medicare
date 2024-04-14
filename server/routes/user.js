import express from 'express'
import { updateUser,deleteUser,getAllUser,getSingleUser, getUserProfile, getMyAppointment } from '../controllers/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.put("/:id", authenticate, restrict(['patient']),  updateUser);
router.delete("/:id",authenticate, restrict(['patient']), deleteUser);
router.get('/:id', authenticate, restrict(['patient']), getSingleUser);
router.get('/profile/me',authenticate, restrict(['patient']), getUserProfile)
router.get('/appoinments/my-appoinments',authenticate, restrict(['patient']), getMyAppointment)

export default router