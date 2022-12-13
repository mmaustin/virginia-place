import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/EventsContainer';
import Loading from "./Loading";
import Event from './Event';

const EventsContainer = () => {
  const {} = useAppContext();
  return (
    <div>EventsContainer</div>
  )
}
export default EventsContainer