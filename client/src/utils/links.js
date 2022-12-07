import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 2, text: 'all events', path: '/', icon: <MdQueryStats /> },
  { id: 3, text: 'add event', path: 'add-event', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

export default links