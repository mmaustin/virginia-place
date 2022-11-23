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
        />
      </form>
    </main>
  )
}
export default Register;