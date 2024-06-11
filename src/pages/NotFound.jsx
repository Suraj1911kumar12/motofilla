import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    const localData = localStorage.getItem('Token')
    useEffect(() => {
        if (!localData) {
            navigate('/')
        }
    }, [])
    return

}

export default NotFound