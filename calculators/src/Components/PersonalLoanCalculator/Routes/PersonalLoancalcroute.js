import React from 'react'
import { useRoutes } from 'react-router-dom';
import HomeLoanCalc from '../../HomeLoanCalculator/HomeLoanCalc';


const PersonalLoancalcroute = () => {
    const Routes = [
        {
            path: '/personal-calculator',
            element: <HomeLoanCalc />
        }
    ]

    let routes = useRoutes(Routes);
    return routes
}

export default PersonalLoancalcroute