import main from '../assets/images/main.svg';
import {Link} from 'react-router-dom';
import logo from '../assets/images/favicon.ico';


const Landing = () => {

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
                &nbsp;&nbsp;<span className='landing-span'>Or View All Of The </span>&nbsp;&nbsp;
                <Link to='/events' className='btn btn-hero'> Events </Link>
            </div>
            <p></p>
            <img src={main} alt='event scene' className='img'/>
        </div>
    </main>
  )
}
export default Landing