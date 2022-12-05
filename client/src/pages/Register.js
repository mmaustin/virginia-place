import {useState} from 'react';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';
//import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}


const Register = () => {
  const [values, setValues] = useState(localState);
  const {isLoading, showAlert, displayAlert, registerUser} = useAppContext();

const onSubmit = (e) => {
  e.preventDefault();
  const {name, email, password, isMember} = values;
  if(!email || !password || (!isMember && !name)){
    displayAlert();
    return
  }
  const currentUser = {name, email, password};
  registerUser(currentUser);
}

const toggleMember = () => {
  setValues({...values, isMember: !values.isMember})
}

  const handleChange = e =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <main className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h2>LOGO</h2>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert/>}
        {!values.isMember && (<FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />)}
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        <button type="submit" className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </main>
  )
}
export default Register;