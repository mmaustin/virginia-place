import main from '../assets/images/main.svg';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/images/favicon.ico';


const Landing = () => {

    const getData = async ()=>{
        const response = await fetch('/a');
        console.log(typeof response)
        const data = await response.json();
        console.log(data);
    }

    useEffect(()=>{
        getData();
    }, [])

  return (
    <main>
        <nav>
            <img src={logo} alt='landing logo' className='logo'/>
        </nav>
        <div className='container'>
            <div className='info'>
                <h1>
                    Events Page
                </h1>
                <p>
                    Swag typewriter pour-over whatever farm-to-table edison bulb.
                    Unicorn edison bulb whatever gatekeep, pok pok health goth cronut
                    chambray keffiyeh. Health goth vinyl DIY pork belly skateboard
                    snackwave, artisan same everyday carry church-key farm-to-table kombucha.
                </p>
                <Link to='/register' className='btn btn-hero'> Login/Register</Link>
            </div>
            <img src={main} alt='event scene' className='img'/>
        </div>
    </main>
  )
}
export default Landing