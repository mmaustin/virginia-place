import {useState} from 'react';
import { FormRow, Alert } from '../components';
//import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true
}


const Register = () => {
  const [values, setValues] = useState(localState);

const onSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
}

  const handleChange = e =>{
    let name = e.target.name;
    let value = e.target.value;
    setValues({...values, [e.target.name]: e.target.values})
    console.log(`Name is ${name}: ${value}`)
  }

  return (
    <main className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h2>LOGO</h2>
        <h3>Login</h3>
          <FormRow
            type='text'
            name='name'
            vaule={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            vaule={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            name='password'
            vaule={values.password}
            handleChange={handleChange}
          />
        <button type="submit" className='btn btn-block'>
          Submit
        </button>
      </form>
    </main>
  )
}
export default Register;