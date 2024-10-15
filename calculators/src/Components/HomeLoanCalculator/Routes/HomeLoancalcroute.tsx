import React from 'react'
import { useRoutes } from 'react-router-dom';
import HomeLoanCalc from '../HomeLoanCalc';


const HomeLoancalcroute = () => {
    const Routes = [
        {
            path: '/homeLoan-calculator',
            element: <HomeLoanCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default HomeLoancalcroute