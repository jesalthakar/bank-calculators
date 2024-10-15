import React, { createContext, ReactNode, useState } from 'react';
import { ApiProviderPropsTypes } from './types';



const ApiContext = createContext<ApiProviderPropsTypes|null>(null);


const ApiProvider:React.FC<{children:ReactNode}> = ({ children }) => {

    const [apiData, setApiData] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    return (
        <ApiContext.Provider value={{ apiData, setApiData, userLoggedIn, setUserLoggedIn }}>
            {children}
        </ApiContext.Provider>
    )


}
export { ApiProvider, ApiContext };