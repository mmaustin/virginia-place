import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import {IoMdPerson} from 'react-icons/io';
import {FcClock} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Event';
import EventInfo from './EventInfo';

const Event = ({_id, organizer, eventType, description, createdAt, eventDate, eventTime}) => {

  const {setEditEvent, deleteEvent} = useAppContext();

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{description.charAt(0)}</div>
        <div className='info'>
          <h5>{description}</h5>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <EventInfo icon={<IoMdPerson />} text={organizer} />
          <EventInfo icon={<FaPlay />} text={eventType} />
          <EventInfo icon={<FaCalendarAlt />} text={eventDate} />
          <EventInfo icon={<FcClock />} text={eventTime.toUpperCase()} />
        </div>        
        <footer>
          <div className='actions'>
            <Link to='add-event' className='btn edit-btn' onClick={()=> setEditEvent(_id)}>Edit</Link>
            <button className='btn delete-btn'type='button' onClick={()=> deleteEvent(_id)}>Delete</button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}
export default Event