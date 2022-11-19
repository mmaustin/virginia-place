import main from '../assets/images/main.svg';
//import {Link} from 'react-router-dom';
const Landing = () => {
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
                <button className='btn btn-hero'> Login/Register</button>
            </div>
            <img src={main} alt='event scene' className='img'/>
        </div>
    </main>
  )
}
export default Landing