import React from 'react'
import PPFCalc from '../PPFCalc';
import { useRoutes } from 'react-router-dom';


const PPFCalculatorRoute = () => {
    const Routes = [
        {
            path: '/ppf-calculator',
            element: <PPFCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default PPFCalculatorRoute