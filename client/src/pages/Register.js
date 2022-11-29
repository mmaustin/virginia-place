import {useState} from 'react';
import {Link} from 'react-router-dom';

const localState = {
  name: '',
  email: '',
  password: '',
  buildingNumber: ''
}


const Register = () => {
  const [values, setValues] = useState(localState);

  const setInput = e =>{
    let name = e.target.name;
    let value = e.target.value;
    setValues({...values, [e.target.name]: e.target.values})
    console.log(`Name is ${name}: ${value}`)
  }

  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          vaule={values.name}
          onChange={e => setInput(e)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type='text'
          id='email'
          name='email'
          vaule={values.email}
          onChange={e => setInput(e)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type='text'
          id='password'
          name='password'
          vaule={values.password}
          onChange={e => setInput(e)}
        />
        <label htmlFor="buildingNumber">Building Number:</label>
        <input
          type='text'
          id='buildingNumber'
          name='buildingNumber'
          vaule={values.buildingNumber}
          onChange={e => setInput(e)}
        />
      </form>
    </main>
  )
}
export default Register;