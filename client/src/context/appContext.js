import React, { useContext, useReducer } from "react";


const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',    
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {


    return(
        <AppContext.Provider 
            value={{
                
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