import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    organizer: {
      type: String,
      required: [true, 'Please provide organizer\'s name.'],
      maxlength: 30,
      trim: true,
    },
    eventType: {
      type: String,
      required: [true, 'Please provide an event type.'],
      maxlength: 30,
      trim: true,        
    },
    eventDate: {
      type: String,
      required: [true, 'Please provide a valid date.'],
      match: [
        /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-(19|20)\d{2}$/,
        'Please provide a valid date.'
      ]
    },
    eventTime: {
      type: String,
      required: [true, 'Please provide a valid time.'],
      match: [
        /^((1[0-2]|0?[0-9]):[0-5]?[0-9]\s([ap][m])|((2[0-3]|[0-1]?[0-9]):[0-5][0-9]))$/igm,
        'Please provide a valid time.'
      ]
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the event.'],
      maxlength: 150,
      trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      }, 
    },
    {timestamps: true}
)

export default mongoose.model('Event', EventSchema);