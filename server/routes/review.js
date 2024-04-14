import express from 'express';
import { authenticate, restrict } from '../auth/verifyToken.js';
import {getAllReviews, createReview } from '../controllers/reviewController.js';


const router = express.Router({mergeParams:true});

router.route('/').get(getAllReviews);
router.route('/:doctorId').post(authenticate, restrict(['patient']), createReview)

export default router;