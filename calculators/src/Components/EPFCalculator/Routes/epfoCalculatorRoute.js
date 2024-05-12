import React from 'react'
import EPFCalc from '../EPFCalc';
import { useRoutes } from 'react-router-dom';

const EpfoCalculatorRoute = () => {
    const Routes = [
        {
            path: '/epf-calculator',
            element: <EPFCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes

}

export default EpfoCalculatorRoute