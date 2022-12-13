import moment from 'moment'

const Event = ({organizer, eventType, description, createdAt}) => {
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY')

  return (
    <div>
      <h5>{eventType}</h5>
      <h5>{date}</h5>
      <p>{description}</p>
    </div>
  )
}
export default Event