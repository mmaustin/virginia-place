import { initialState } from "./appContext";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  GRAB_EVENTS_BEGIN,
  GRAB_EVENTS_SUCCESS,
  GRAB_EVENTS_ERROR,  
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_EVENT_BEGIN,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_ERROR,
  GET_EVENTS_BEGIN,
  GET_EVENTS_SUCCESS,
  SET_EDIT_EVENT,
  EDIT_EVENT_BEGIN,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_ERROR,
  DELETE_EVENT_BEGIN      
} from "./actions";

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
          ...state,
          showAlert: true,
          alertType: 'danger',
          alertText: 'Please provide all values!',
        }
      }
      if (action.type === CLEAR_ALERT) {
        return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: '',
        }
      }

      if(action.type === GRAB_EVENTS_BEGIN){
        return {...state, isLoading: true};
      }
      if(action.type === GRAB_EVENTS_SUCCESS){
        return {
          ...state,
          isLoading: false,
          allEvents: action.payload.allEvents,
          allTotalEvents: action.payload.allTotalEvents,
          numberOfPAges: action.payload.numberOfPages,
        }
      }
      if(action.type === GRAB_EVENTS_ERROR){
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg
        };
      }      

      if(action.type === REGISTER_USER_BEGIN){
        return {...state, isLoading: true};
      }
      if(action.type === REGISTER_USER_SUCCESS){
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          user: action.payload.user,
          token: action.payload.token,
          alertType: 'success',
          alertText: 'User Created, redirecting . . . '
        }
      }
      if(action.type === REGISTER_USER_ERROR){
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertText: action.payload.msg
        };
      }

      if(action.type === LOGIN_USER_BEGIN){
        return {...state, isLoading: true};
      }
      if(action.type === LOGIN_USER_SUCCESS){
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          user: action.payload.user,
          token: action.payload.token,
          alertType: 'success',
          alertText: 'User logged in, redirecting . . . '
        }
      }
      if(action.type === LOGIN_USER_ERROR){
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg
        };
      }

      if (action.type === TOGGLE_SIDEBAR) {
        return {
          ...state,
          showSidebar: !state.showSidebar,
        }
      }      
      
      if(action.type === LOGOUT_USER){
        return {...initialState, user: null, token: null}
      }

      if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true }
      }
      if (action.type === UPDATE_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          token: action.payload.token,
          user: action.payload.user,
          showAlert: true,
          alertType: 'success',
          alertText: 'User Profile Updated!',
        }
      }
      if (action.type === UPDATE_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
      }
      
      if (action.type === HANDLE_CHANGE) {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        }
      }
      
      if (action.type === CLEAR_VALUES) {
        const initialState = {
          isEditing: false,
          editEventId: '',
          organizer: '',
          eventType: '',
          description: '',
          eventDate: '',
          eventTime: ''
        }
    
        return {
          ...state,
          ...initialState,
        }
      }
      
      if (action.type === CREATE_EVENT_BEGIN) {
        return { ...state, isLoading: true }
      }    
  
      if (action.type === CREATE_EVENT_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'New Event Created!',
        }
      }
      if (action.type === CREATE_EVENT_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
      }
      if (action.type === GET_EVENTS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false }
      }
      if (action.type === GET_EVENTS_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          events: action.payload.events,
          totalEvents: action.payload.totalEvents,
          numOfPages: action.payload.numOfPages,
        }
      }
      
      if (action.type === SET_EDIT_EVENT) {
        const event = state.events.find((event) => event._id === action.payload.id)
        const { _id, organizer, eventType, description, eventDate, eventTime } = event
        return {
          ...state,
          isEditing: true,
          editEventId: _id,
          organizer,
          eventType,
          description,
          eventDate,
          eventTime
        }
      }

      if (action.type === DELETE_EVENT_BEGIN) {
        return { ...state, isLoading: true }
      }
  
      if (action.type === EDIT_EVENT_BEGIN) {
        return {
          ...state,
          isLoading: true,
        }
      }
      if (action.type === EDIT_EVENT_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'Event Updated!',
        }
      }
      if (action.type === EDIT_EVENT_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
      }      

    throw new Error(`no such action: ${action.type}`);

}
export default reducer;