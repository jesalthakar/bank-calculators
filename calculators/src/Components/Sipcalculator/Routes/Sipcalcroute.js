import React from 'react';
import SiplumpsumCalc from '../SiplumpsumCalc';
import { useRoutes } from 'react-router-dom';


const Sipcalcroute = () => {
    const Routes = [
        {
            path: '/sip-calculator',
            element: <SiplumpsumCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default Sipcalcroute