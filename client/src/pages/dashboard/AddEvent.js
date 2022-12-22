import {FormRow, Alert} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';


const AddEvent = () => {
  const {showAlert, displayAlert, isLoading, organizer, eventType, description, eventDate, eventTime, isEditing, handleChange, clearValues, createEvent, editEvent } = useAppContext();


  const handleSubmit = e => {
    e.preventDefault();
    if(!organizer || !description || !eventType || !eventTime || !eventDate){
      displayAlert()
      return
    }
    if(isEditing){
      editEvent();
      return
    }
    createEvent();
  }

  const handleEventInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Event' : 'Add Event'}</h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          <FormRow
            placeHolder='maximum 30 characters'
            labelText='host'
            type='text'
            name='organizer'
            value={organizer}
            handleChange={handleEventInput}
          />
          <FormRow
            placeHolder='maximum 30 characters'
            labelText='Event Type'
            type='text'
            name='eventType'
            value={eventType}
            handleChange={handleEventInput}
          />
          <FormRow
            placeHolder='mm-dd-yyyy'
            labelText='Date'
            type='text'
            name='eventDate'
            value={eventDate}
            handleChange={handleEventInput}
          />
          <FormRow
            placeHolder='00:00 a/pm'
            labelText='Time'
            type='text'
            name='eventTime'
            value={eventTime}
            handleChange={handleEventInput}
          />
          {/* <label htmlFor="description" className='form-label'>Description</label>
          <textarea */}
          <FormRow
            placeHolder='maximum 150 characters'
            id='description'
            type='textarea'
            name='description'
            value={description}
            handleChange={handleEventInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'            
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>          
        </div>
      </form>
    </Wrapper>
  )
}
export default AddEvent