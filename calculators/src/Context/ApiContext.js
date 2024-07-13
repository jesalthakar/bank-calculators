import React, { createContext, useState } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    return (
        <ApiContext.Provider value={{ apiData, setApiData, userLoggedIn, setUserLoggedIn }}>
            {children}
        </ApiContext.Provider>
    )


}
export { ApiProvider, ApiContext };