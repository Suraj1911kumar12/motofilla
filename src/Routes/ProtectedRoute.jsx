import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { UseAuth } from '../Context/AuthContext'

const ProtectedRoute = () => {

    const auth = UseAuth()
    // if (!auth.isUserAuthenticated) return <Navigate to={'/'} />
    return <Outlet />
}

export default ProtectedRoute