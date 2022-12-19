import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/GrabEventsContainer";
import Loading from "../components/Loading";
import Event from "../components/Event";
import { Link } from "react-router-dom";

const GrabEvents = () => {
    const {allEvents, allTotalEvents, numberOfPages, grabEvents, isLoading} = useAppContext();

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
        <h5>
            {allTotalEvents} event{allEvents.length > 1 && 's'} found
        </h5>
        <div className="events">
            {allEvents.map(event => {
            return <Event key={event._id} {...event}/>
            })}
        </div>
        <Link to='/' className="btn btn-hero">Your Page</Link>
    </Wrapper>
  )
}
export default GrabEvents