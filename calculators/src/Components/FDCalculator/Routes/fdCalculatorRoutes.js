import React from 'react'
import { useRoutes } from 'react-router-dom';
import FDCalc from '../FDCalc';

const FDcalcroute = () => {
    const Routes = [
        {
            path: '/fd-calculator',
            element: <FDCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default FDcalcroute