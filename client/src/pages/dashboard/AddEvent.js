import {FormRow, Alert} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';


const AddEvent = () => {
  const {showAlert, displayAlert, organizer, eventType, description, } = useAppContext();
  return (
    <h3>AddEvent</h3>
  )
}
export default AddEvent