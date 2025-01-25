import React from 'react'
import { useRoutes } from 'react-router-dom'
import ExcelDashBoard from '../ExcelDashBoard';

const ExecDashboardRoute = () => {
    const Routes = [
        {
            path: "/admin/*",
            element: <ExcelDashBoard />

        }

    ]

    const route = useRoutes(Routes);
    return route;
}

export default ExecDashboardRoute