import React from 'react'
import { useRoutes } from 'react-router-dom';
import RDCalc from '../RDCalc';

const RDcalcroute = () => {
    const Routes = [
        {
            path: '/rd-calculator',
            element: <RDCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default RDcalcroute