import React, { useCallback, useEffect, useState } from 'react'
import { getInfo } from '../peticiones'
import Admin from '../pages/admin'
import { Navigate } from 'react-router-dom'

export default function ProtectRouterAdmin() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [navigate, setNavitate] = useState()
    const handle = useCallback( async () => {
        console.log("Entre si claro que si")
        getInfo(token).then(res => {
            if (res.ok) {
                res.json()
            } else {
                console.log("Error en la peticion get")
            }
        }).then(data => {
            console.log(data)
        }).catch(err => console.log(err))
    },[token])

    useEffect(() => {

        if (token) {
            handle()
        }else{
            setNavitate(<Navigate to={"/"} replace />)
        }
    }, [])

    const handdlePeticion = () => {
        if (token) {
            getInfo(token).then(res => {
                if (res.ok) {
                    res.json()
                } else {
                    console.log("Error en la peticion get")
                }
            }).then(data => {
                console.log(data)
            }).catch(err => console.log(err))
        } else {
            setNavitate(<Navigate to={"/"} replace />)
        }
    }
    return (
        navigate
    )

}
