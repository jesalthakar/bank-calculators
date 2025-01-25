import React from 'react'
import { useRoutes } from 'react-router-dom'
import ManagerDashboard from '../ManagerDashboard'

const ManagerDashboardRoute = () => {
    const Routes = [{
        path: "/manager",
        element: <ManagerDashboard />
    }]
    const route = useRoutes(Routes);
    return route;
}

export default ManagerDashboardRoute