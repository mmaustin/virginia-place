import { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import {useAppContext} from '../../context/appContext';
import {FormRow, Alert} from '../../components';

const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [buildingNumber, setBuildingNumber] = useState(user?.buildingNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !buildingNumber){
      displayAlert();
      return
    }
    updateUser({name, email, buildingNumber});
  }

  //const handleBuildingChange = (e) => setBuildingNumber(e.target.value)

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='Building Number'
            name='buildingNumber'
            value={buildingNumber}
            handleChange={(e) => setBuildingNumber(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile