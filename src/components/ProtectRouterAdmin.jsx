import React, { useEffect, useState } from 'react'
import { getInfo } from '../peticiones'
import Admin from '../pages/admin'
import { Navigate } from 'react-router-dom'

export default function ProtectRouterAdmin() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [navigate, setNavitate] = useState()
    useEffect(()=>{
        handleAdmin()
    },[])

    const handleAdmin = async ()=>{
        if(token){
            const response = await getInfo(token)

            if(response.ok){
                const data = await response.json()

                if(data.role === "ADMIN"){
                    setNavitate(<Admin />)
                }else{
                    setNavitate(<Navigate to={"/"} replace />)
                }
            }
        }else{
            setNavitate(<Navigate to={"/"} replace />)
        }
    }

    return (
        navigate
    )

}
