import React, { useContext, useReducer} from "react";
import reducer from "./reducer";
import axios from 'axios';


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

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    allEvents: [],
    allTotalEvents: 0,
    numberOfPages: 1,
    user: user ? JSON.parse(user) : null,
    token: token,
    showSidebar: false,
    isEditing: false,
    editEventId: '',
    organizer: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    description: '',
    events: [],
    totalEvents: 0,
    numOfPages: 1,
    pages: 1,

}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: '/api/v1',
      })
      // request
    
      authFetch.interceptors.request.use(
        (config) => {
          config.headers['Authorization'] = `Bearer ${state.token}`
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
      )
      // response
    
      authFetch.interceptors.response.use(
        (response) => {
          return response
        },
        (error) => {
          if (error.response.status === 401) {
            logoutUser()
          }
          return Promise.reject(error)
        }
      )    

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
      }
    
      const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }     

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(()=> {
            dispatch({type: CLEAR_ALERT})
        }, 3000);
    }

    const grabEvents = async() => {
      dispatch({type: GRAB_EVENTS_BEGIN});
      try {
        const {data} = await axios.get('/api/v1/events/all');
        const {allEvents, allTotalEvents, numberOfPages} = data;
        dispatch({
          type: GRAB_EVENTS_SUCCESS,
          payload: {allEvents, allTotalEvents, numberOfPages}
        });
      } catch (error) {
        dispatch({
          type: GRAB_EVENTS_ERROR,
          payload: {msg: error.response.data.msg}
        });
      }
      clearAlert();
    }

    const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/register', currentUser)
            const {user, token} = data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {user, token}
            });
            addUserToLocalStorage({ user, token })           
        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: {msg: error.response.data.msg}
            });
        }
      clearAlert();
    }

    const loginUser = async (currentUser) => {
        dispatch({type: LOGIN_USER_BEGIN});
        try {
            const {data} = await axios.post('/api/v1/auth/login', currentUser)
            const {user, token} = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {user, token}
            });
            addUserToLocalStorage({ user, token })            
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: {msg: error.response.data.msg}
            });
        }
        clearAlert();
    }

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }    

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
    }

    const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN})
        try {
            const {data} = await authFetch.patch('/auth/updateUser', currentUser);
            const {user, token} = data;
            dispatch({type: UPDATE_USER_SUCCESS, payload: {user, token}})
            addUserToLocalStorage({ user, token });
        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({
                  type: UPDATE_USER_ERROR,
                  payload: { msg: error.response.data.msg },
                })
            }            
        }
        clearAlert();
    }

    const handleChange =({name, value}) =>{
        dispatch({
            type: HANDLE_CHANGE,
            payload: {name, value}
        });
    }

    const clearValues = () => {
        dispatch({type: CLEAR_VALUES})
    }

    const createEvent = async () => {
        dispatch({ type: CREATE_EVENT_BEGIN })
        try {
          const { organizer, description, eventType, eventDate, eventTime } = state
          await authFetch.post('/events', {
            organizer,
            description,
            eventType,
            eventDate,
            eventTime
          })
          dispatch({ type: CREATE_EVENT_SUCCESS })
          dispatch({ type: CLEAR_VALUES })
        } catch (error) {
          if (error.response.status === 401) return
          dispatch({
            type: CREATE_EVENT_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()       
    }

    const getEvents = async() => {
        let url = `/events`;
        dispatch({type: GET_EVENTS_BEGIN});
        try {
            const {data} = await authFetch(url);
            const {events, numOfPages, totalEvents} = data;
            dispatch({
                type: GET_EVENTS_SUCCESS,
                payload: {events, numOfPages, totalEvents}
            })
        } catch (error) {
            logoutUser();
        }
        clearAlert();
    }
    
    const setEditEvent = (id) => {
        dispatch({type: SET_EDIT_EVENT, payload: {id} });
    }

    const editEvent = async () => {
        dispatch({ type: EDIT_EVENT_BEGIN })

        try {
          const { organizer, description, eventType, eventDate, eventTime} = state
          await authFetch.patch(`/events/${state.editEventId}`, {
            organizer,
            description,
            eventType,
            eventDate,
            eventTime
          })
          dispatch({ type: EDIT_EVENT_SUCCESS })
          dispatch({ type: CLEAR_VALUES })
        } catch (error) {
          if (error.response.status === 401) return
          dispatch({
            type: EDIT_EVENT_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()
    }

    const deleteEvent = async (eventId) => {
        dispatch({ type: DELETE_EVENT_BEGIN })
        try {
          await authFetch.delete(`/events/${eventId}`)
          getEvents()
        } catch (error) {
          logoutUser()
        }
    }

    return(
        <AppContext.Provider 
            value={{
                ...state,
                grabEvents,
                displayAlert,
                registerUser,
                loginUser,
                logoutUser,
                toggleSidebar,
                updateUser,
                handleChange,
                clearValues,
                createEvent,
                getEvents,
                setEditEvent,
                deleteEvent,
                editEvent,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    return useContext(AppContext);
}

export {initialState, AppProvider, useAppContext};