import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/GrabEventsContainer";
import Loading from "../components/Loading";
import EventNoAuth from "../components/EventNoAuth";
import { Link} from "react-router-dom";
import { Alert } from "../components";

const GrabEvents = () => {
    const {allEvents, allTotalEvents, grabEvents, isLoading, showAlert} = useAppContext();

    useEffect(() => {
      grabEvents();
      // eslint-disable-next-line
    }, [])

    if(isLoading){
        return <Loading center />
      }
    
      if(allEvents.length === 0){
        return(
          <Wrapper>
            <h3>No Events To Display . . . </h3>
          </Wrapper>
        )
      }    

  return (
    <Wrapper>
        {showAlert && <Alert/>}
        <Link to='/' className="btn btn-hero"> Visit Your Page or Login/Register</Link>
        <p></p>
        <h5>
            {allTotalEvents} event{allEvents.length > 1 && 's'} found
        </h5>
        <div className="events">
            {allEvents.map(event => {
            return <EventNoAuth key={event._id} {...event}/>
            })}
        </div>
    </Wrapper>
  )
}
export default GrabEvents