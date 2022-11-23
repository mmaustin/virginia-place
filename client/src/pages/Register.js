import {useState} from 'react';
import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  buildingNumber: ''
}


const Register = () => {
  const [values, setValue] = useState(localState);

  return (
    <div>Register</div>
  )
}
export default Register;