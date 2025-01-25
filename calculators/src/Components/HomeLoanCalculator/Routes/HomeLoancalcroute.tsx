import React from 'react'
import { useRoutes } from 'react-router-dom';
import HomeLoanCalc from '../HomeLoanCalc';


const HomeLoancalcroute = () => {
    const Routes = [
        {
            path: '/home-calculator',
            element: <HomeLoanCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default HomeLoancalcroute