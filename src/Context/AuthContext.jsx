import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// const baseURL = base_url

const baseURL = "http://103.160.107.21:8000/v1"

const loginApi = `${baseURL}/admin/login`
const otpAPI = `${baseURL}/admin/verify`
const resendOTPAPI = `${baseURL}/api/admin/resend-otp`


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(Cookies.get('token'))
    const [token, setToken] = useState(Cookies.get('token'))
    const [isError, setIsError] = useState(false)
    const [isOTPError, setIsOTPError] = useState(false)


    const loginAction = async (typeField, email, password) => {
        setIsLoading(true)
        try {
            const response = await axios.post(loginApi, {
                email: email,
                password: password
            })
            setIsLoading(false)
            localStorage.setItem("type", typeField)
            localStorage.setItem("value", email)
            console.warn(response);
            if (response.status === 200) {
                navigate("/otp-verification")
            }
            if (response.status === 400) {
                console.log(response.data);
            }
        } catch (error) {
            setIsLoading(false)
            console.log("Error while login", error)
            const errResponse = error.response.data.errors || error.response.data.msg || error.message
            setIsError(errResponse)
        }
    }
    const logout = () => {

        setIsUserAuthenticated(false)
        setToken("")
        localStorage.clear()
        Cookies.remove('token')
        navigate('/')
    }
    const otpVerification = async (otp, value) => {
        setIsError("")
        try {
            const response = await axios.post(otpAPI, {
                email: value,
                otp: otp
            })
            console.warn(response.status);
            if (response.status === 200 || response.statusText === 'OK') {
                setIsUserAuthenticated(true)
                localStorage.setItem("Token", response.data.data)
                localStorage.setItem("UserType", response.data.data.type)
                localStorage.setItem("Email", response.data.data.email)
                Cookies.set('token', response.data.data, { expires: 1, secure: true, path: '' })
                setToken(response.data.data)
                navigate("/")
            } else {
                alert("Invalid OTP")
                navigate('/')
            }
        } catch (error) {
            console.log("Error while otp verification", error)
            const errorResponse = error.response.data
            if (!errorResponse.status) {
                setIsOTPError(true)
            }
        }
    }
    const resendOTP = async (type, value) => {
        console.log(type, value);
        try {
            const responseResendOtp = await axios.post(resendOTPAPI, {
                type: type,
                value: value
            })
            console.warn(responseResendOtp);
        } catch (error) {
            console.log("error while resending otp", error);
            setIsOTPError(true)
        }
    }
    return (
        <AuthContext.Provider
            value={{ loginAction, isLoading, isUserAuthenticated, logout, otpVerification, resendOTP, token, isError, isOTPError }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}
