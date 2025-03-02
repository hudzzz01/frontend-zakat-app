import React, { createContext, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({children}) => {


    const [theme,setTheme] = useState("light");
    const [isLoading, setIsLoading] = useState(false)
    const [isAllert, setIsAllert] = useState(false)
    const [allertMessage, setAllertMessage] = useState("")
  
    

    const contextValue = {
            theme : theme,
            isLoading : isLoading,
            isAllert : isAllert,
            allertMessage : allertMessage,
            
        };      

        

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );

   
}

export {AppProvider, AppContext}
