import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import {IoMdPerson} from 'react-icons/io';
import {FcClock} from 'react-icons/fc';
import Wrapper from '../assets/wrappers/Event';
import EventInfo from './EventInfo';

const EventNoAuth = ({organizer, eventType, description, eventTime, eventDate}) => {

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
          <EventInfo icon={<FcClock />} text={eventTime} />
        </div>
      </div>
    </Wrapper>
  )
}
export default EventNoAuth;