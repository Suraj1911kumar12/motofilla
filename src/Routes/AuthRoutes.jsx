import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import OtpVerification from '../pages/OtpVerification';
import NotFound from '../pages/NotFound';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AuthRoutes