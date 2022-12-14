import {useState, useEffect} from 'react';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/images/favicon.ico';
import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}


const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(localState);
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext();

const onSubmit = (e) => {
  e.preventDefault();
  const {name, email, password, isMember} = values;
  if(!email || !password || (!isMember && !name)){
    displayAlert();
    return
  }
  const currentUser = {name, email, password};
  if(isMember){
    loginUser(currentUser)
  } else {
   registerUser(currentUser);
  }
}

const toggleMember = () => {
  setValues({...values, isMember: !values.isMember})
}

const handleChange = e =>{
  setValues({...values, [e.target.name]: e.target.value})
}

useEffect(()=> {
  if(user){
    setTimeout(()=>{
      navigate('/');
    }, 3000)
  }
}, [user, navigate])

  return (
    <main className='full-page'>
      <form className='form' onSubmit={onSubmit}>
      <img src={logo} alt='register logo' className='logo'/>
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
        <p></p>
        <button type="submit" className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
        <Link to='/events' className='btn btn-hero'> Events Page</Link>
      </form>
    </main>
  )
}
export default Register;