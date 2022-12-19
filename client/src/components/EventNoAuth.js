import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import {IoMdPerson} from 'react-icons/io';
import Wrapper from '../assets/wrappers/Event'
import EventInfo from './EventInfo';

const EventNoAuth = ({organizer, eventType, description, dateTime}) => {

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
          <EventInfo icon={<FaCalendarAlt />} text={dateTime} />
          <EventInfo icon={<IoMdPerson />} text={organizer} />
          <EventInfo icon={<FaPlay />} text={eventType} />
        </div>
      </div>
    </Wrapper>
  )
}
export default EventNoAuth;