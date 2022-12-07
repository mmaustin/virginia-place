import express from 'express';
const router = express.Router();

import {createEvent, getEvents, deleteEvent, updateEvent} from '../controllers/eventsController.js';

router.route('/').post(createEvent).get(getEvents);
router.route('/:id').delete(deleteEvent).patch(updateEvent);

export default router;
