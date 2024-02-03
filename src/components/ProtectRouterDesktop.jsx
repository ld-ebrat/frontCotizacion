import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Desktop from '../layout/Desktop'

function ProtectRouterDesktop() {
    const token = localStorage.getItem("token")
    const idUser = useParams()
    if(!token){
        return <Navigate to={`/profile/${idUser.user}/product`} replace />
    }

    return <Desktop/>
}

export default ProtectRouterDesktop