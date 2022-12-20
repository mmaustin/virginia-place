import { SiBookmeter } from 'react-icons/si'
import { FaWpforms, FaEdgeLegacy } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'all events', path: '/events', icon: <SiBookmeter /> },
  { id: 2, text: 'your events', path: '/', icon: <FaEdgeLegacy /> },
  { id: 3, text: 'add event', path: 'add-event', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

export default links