import React, { createContext, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({children}) => {


    const [theme,setTheme] = useState("light");
    const [isLoading, setIsLoading] = useState(false)
    const [isAllert, setIsAllert] = useState(false)
    const [allertMessage, setAllertMessage] = useState("")

    //zakat context
    const [malam,setMalam] = useState(1);
    const [team,setTeam] = useState("1");


  
    

    const contextValue = {

            theme : theme,
            isLoading : isLoading,
            isAllert : isAllert,
            allertMessage : allertMessage,

            //constex zakat
            team : team,
            malam : malam,


            //setter
            setTeam : setTeam,
            setMalam : setMalam,
            
        };      

        

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );

   
}

export {AppProvider, AppContext}
