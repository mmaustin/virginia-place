import {useState} from 'react';
import { FormRow } from '../components';
import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  buildingNumber: ''
}


const Register = () => {
  const [values, setValues] = useState(localState);

  const handleChange = e =>{
    let name = e.target.name;
    let value = e.target.value;
    setValues({...values, [e.target.name]: e.target.values})
    console.log(`Name is ${name}: ${value}`)
  }

  return (
    <main className='full-page'>
      <form className='form'>
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
        <FormRow
          labelText='Building Number'
          type='text'
          name='buildingNumber'
          vaule={values.buildingNumber}
          handleChange={handleChange}
        />
      </form>
    </main>
  )
}
export default Register;