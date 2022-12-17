import Event from '../models/Event.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';


const createEvent = async (req, res) => {
    const {organizer, eventType, description, dateTime} = req.body;

    if(!organizer || !eventType || !description || !dateTime){
        throw new BadRequestError('Please provide all values');
    }
    req.body.createdBy = req.user.userId;
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({event});

}

const getAllEvents = async(res) => {
  const allEvents = await Event.find();
  res.status(StatusCodes.OK).json({allEvents, allTotalEvents: allEvents.length, numberOfPages: 1})
}

const getEvents = async (req, res) => {
    const events = await Event.find({createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({events, totalEvents: events.length, numOfPages: 1});
}

const updateEvent = async (req, res) => {
    const { id: eventId } = req.params
    const { organizer, description, dateTime, eventType } = req.body
  
    if (!organizer || !description || !dateTime || !eventType) {
      throw new BadRequestError('Please provide all values')
    }
    const event = await Event.findOne({ _id: eventId })
  
    if (!event) {
      throw new NotFoundError(`No job with id :${eventId}`)
    }
    // check permissions
    
    checkPermissions(req.user, event.createdBy)
    
    // findOneAndUpdate does not trigger any hooks that may be present on the model
    // you would use model.save() and the alternative updating approach outlined in video 150
    const updatedEvent = await Event.findOneAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    })
  
    res.status(StatusCodes.OK).json({ updatedEvent })
}

const deleteEvent = async (req, res) => {
    const { id: eventId } = req.params

    const event = await Event.findOne({ _id: eventId })
  
    if (!event) {
      throw new NotFoundError(`No job with id :${eventId}`)
    }
  
    checkPermissions(req.user, event.createdBy)
  
    await event.remove()
  
    res.status(StatusCodes.OK).json({ msg: 'Success! Event removed' })    
}

export {getAllEvents,getEvents, createEvent, updateEvent, deleteEvent};