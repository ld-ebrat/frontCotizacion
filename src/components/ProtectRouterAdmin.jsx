import React, { useState } from 'react'
import { useEffect } from 'react'
import { getInfo, getInfoUser } from '../peticiones'
import { Navigate, useNavigate } from 'react-router-dom'
import Admin from '../pages/admin'

function ProtectRouterAdmin() {

    const token = localStorage.getItem("token")
    const [navigat, setNavigat] = useState(<></>)
    useEffect(()=>{
        if(token){
            getInfo(token).then(res => res.json()).then(data => {
                if(data.role === "ADMIN"){
                    console.log("Entre aqui")
                    setNavigat(<Admin/>)
                }else{
                    console.log("No, entre aca")
                    setNavigat(<Navigate to={"/"} replace/>)
                }
            })
        }else{
            setNavigat(<Navigate to={"/"}/>)
        }
    },[token])

    return (
        navigat
    )
}

export default ProtectRouterAdmin

