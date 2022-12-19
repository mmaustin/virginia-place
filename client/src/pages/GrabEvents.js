import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/EventsContainer";
import Loading from "../components/Loading";
import Event from "../components/Event";

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
    <>
        <h3>Grab Events</h3>
        <h4>{allTotalEvents}</h4>
    </>
  )
}
export default GrabEvents