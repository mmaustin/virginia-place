import { useEffect } from "react";
import { useAppContext } from "../context/appContext";


const GrabEvents = () => {
    const {allEvents, allTotalEvents, numberOfPages, grabEvents, isLoading} = useAppContext();

    useEffect(() => {
      grabEvents();
    }, [])
  return (
    <>
        <h3>Grab Events</h3>
        <h4>{allTotalEvents}</h4>
    </>
  )
}
export default GrabEvents