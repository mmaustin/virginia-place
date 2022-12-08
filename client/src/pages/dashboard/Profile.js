import { useState } from 'react';
import {Wrapper} from '../../assets/wrappers/DashboardFormPage';
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

  return (
    <h3>Profile</h3>
  )
}
export default Profile