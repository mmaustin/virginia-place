import main from '../assets/images/main.svg';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const Landing = () => {

    useEffect(()=>{
        const ok = fetch('http://localhost:5001/')
        console.log(ok);
    })

  return (
    <main>
        <nav>
            <p> Logo Landing Page</p>
        </nav>
        <div className='container'>
            <div className='info'>
                <h2>
                    Events Page
                </h2>
                <p>
                    Swag typewriter pour-over whatever farm-to-table edison bulb.
                    Unicorn edison bulb whatever gatekeep, pok pok health goth cronut
                    chambray keffiyeh. Health goth vinyl DIY pork belly skateboard
                    snackwave, artisan same everyday carry church-key farm-to-table kombucha.
                </p>
                <Link to='/' className='btn btn-hero'> Login/Register</Link>
            </div>
            <img src={main} alt='event scene' className='img'/>
        </div>
    </main>
  )
}
export default Landing