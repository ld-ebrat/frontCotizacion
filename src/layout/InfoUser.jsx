import React, { useEffect, useState, useCallback } from 'react'
import { postGetInfoAndCity } from '../peticiones'
import envrironment from '../environment'
import { useParams } from 'react-router-dom'

function InfoUser() {

    const userId = useParams()
    const [user, setUser] = useState()

    // const funcionLoad = useCallback(async () => {
    //     const response = await postGetInfoAndCity(userId)

    //     const data = await response.json()
    //     console.log(data)
    //     return data
    // }, [userId])

    useEffect(() => {
        postGetInfoAndCity(userId.user).then(res => res.json()).then(data => setUser(data))
        // funcionLoad().then(setUser)
    }, [userId])
    return (
        <>
            <section className="pt-20 pb-6 px-10 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col items-center gap-4">
                    <div className=" w-24 h-24 rounded-full flex justify-center items-center">
                        <img className="w-full h-full rounded-full border border-ebrat-white" src={`${envrironment.url_Back}${user?.imag}`} alt=""></img>
                    </div>
                    <div>
                        <h6 className="text-4xl font-bold">{user?.fullname}</h6>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-5">
                    <div className="flex gap-6">
                        <div className="flex gap-2 justify-center items-center">
                            <img className="w-5 h-5" src="/images/tel.png" alt=""></img>
                            <h6>{user?.phone}</h6>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <img className="w-5 h-5" src="/images/ubi.png" alt=""></img>
                            <h6>{
                                <>
                                    {user?.City?.name}, {user?.address}
                                </>
                            }</h6>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 h-32">
                        <p>Descripcion</p>
                        <p className="">
                            {
                                user?.description
                            }
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoUser