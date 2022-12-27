import main from '../assets/images/main.svg';
import {Link} from 'react-router-dom';
import logo from '../assets/images/favicon.ico';
import {FaRegSmileBeam} from 'react-icons/fa'


const Landing = () => {

  return (
    <main>
        <nav>
            <img src={logo} alt='landing logo' className='logo'/>
        </nav>
        <div className='container'>
            <div className='info'>
                <h1>
                    welcome neighbors!!
                </h1>
                <p>
                    Want to know what's popping off on our quiet, little block?  View the 
                    events' page below or register to add your own event. (For security purposes,
                    no reference is made to our block's name, nor is it advisable to put identifying
                    markers--address, phone number, etc--in any of the form fields. We already know who
                    we are! &nbsp;{<FaRegSmileBeam/>} )
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