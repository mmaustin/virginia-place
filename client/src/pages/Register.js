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