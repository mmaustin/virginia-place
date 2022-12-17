import express from 'express';
const router = express.Router();

import {createEvent, getAllEvents, getEvents, deleteEvent, updateEvent} from '../controllers/eventsController.js';
import authenticateUser from '../middleware/auth.js';

router.route('/all').get(getAllEvents);
router.route('/').post(authenticateUser,createEvent).get(authenticateUser, getEvents);
router.route('/:id').delete(authenticateUser ,deleteEvent).patch(authenticateUser ,updateEvent);

export default router;
