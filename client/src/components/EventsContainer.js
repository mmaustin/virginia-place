import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/EventsContainer';
import Loading from "./Loading";
import Event from './Event';

const EventsContainer = () => {
  const {events, getEvents, isLoading, totalEvents, pages} = useAppContext();
  
  useEffect(() => {
    getEvents()
    // eslint-disable-next-line
  }, [])

  if(isLoading){
    return <Loading center />
  }

  if(events.length === 0){
    return(
      <Wrapper>
        <h3>No Events To Display . . . </h3>
      </Wrapper>
    )
  }

  return (
    <div>
      
    </div>
  )
}
export default EventsContainer