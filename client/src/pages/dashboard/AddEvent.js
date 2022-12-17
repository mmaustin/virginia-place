import {FormRow, Alert} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';


const AddEvent = () => {
  const {showAlert, displayAlert, isLoading, organizer, eventType, dateTime, description, isEditing, handleChange, clearValues, createEvent, editEvent } = useAppContext();


  const handleSubmit = e => {
    e.preventDefault();
    if(!organizer || !description || !eventType || !dateTime){
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
            labelText='host (max 30 Characters)'
            type='text'
            name='organizer'
            value={organizer}
            handleChange={handleEventInput}
          />
          <FormRow
            labelText='Event Type (30 characters)'
            type='text'
            name='eventType'
            value={eventType}
            handleChange={handleEventInput}
          />
          <FormRow
            labelText='Date & Time (30 characters)'
            type='text'
            name='dateTime'
            value={dateTime}
            handleChange={handleEventInput}
          />
          <label htmlFor="description" className='form-label'>Description (150 characters)</label>
          <textarea
            className='form-description'
            id='description'
            type='text'
            name='description'
            value={description}
            onChange={handleEventInput}
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