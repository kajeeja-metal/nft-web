import React, { createContext, useState, useContext, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import { getMe } from '@/services/auth'
import axios from '@/services/axios'
//api here is an axios instance which has the baseURL set according to the env.
// import api from '../services/Api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    async function loadUserFromCookies() {
        const token = Cookies.get('token')
        if (token) {
            const data = await getMe(token)
            if (data) setUser(data);
        }
        setLoading(false)
    }
    useEffect(() => {
        loadUserFromCookies()
    }, [])
    const checktoken = async (email, password) => {
        if (token) {
            console.log("Got token")
            Cookies.set('token', token.token, { expires: 60 })
            // axios.defaults.headers.Authorization = `Bearer alsdklaskdalskdlaskdlasd`
            const { data: user } = await getMe(token.token)
            setUser(user)
            console.log("Got user", user)
        }
    }

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        // window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, checktoken,loadUserFromCookies, loading, logout,setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const login = async (email, password) => {
    if (token) {
        console.log("Got token")
        Cookies.set('token', token.token, { expires: 60 })
        // api.defaults.headers.Authorization = `Bearer ${token.token}`
        const { data: user } = await getMe(token.token)
        setUser(user)
        console.log("Got user", user)
    }
}

export const useAuth = () => useContext(AuthContext)