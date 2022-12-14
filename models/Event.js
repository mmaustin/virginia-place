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
    dateTime: {
        type: String,
        required: [true, 'Please provide event\'s date and time.'],
        maxlength: 30,
        trim: true,        
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the event.'],
      maxlength: 200,
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