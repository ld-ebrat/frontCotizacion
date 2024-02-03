import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContex';
import Alert from '../components/Alert';
import { AlertContext } from '../context/AlertContex';
import { useNavigate } from 'react-router-dom';

const SingupData = () => {
    const navigate = useNavigate()
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const { state,  } = useContext(UserContext);
    const { dispatchAlert } = useContext(AlertContext)
    const [user, setUser] = useState({})
    const [prev, setPrev] = useState()
    const [textLength, setTextLength] = useState(0);

    useEffect(() => {
        if (Object.keys(state.user).length === 0) {
            navigate("/singup")
        }
        const funFetch = async () => {
            try {
                const response = await fetch("http://localhost:4000/getstate", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    setStates(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        funFetch()
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })
    }, [])
    
    function addDate(event) {
        if (event.target.id === "CityId") {
            setUser({
                ...state.user,
                ...user,
                [event.target.id]: event.target.selectedOptions[0].getAttribute("data-id")
            })
        } else {
            setUser({
                ...state.user,
                ...user,
                [event.target.id]: event.target.value
            })
            if(user[event.target.id] === ""){
                delete user[event.target.id]
            }
        }
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Hay Campos Vacios" } })
    }

    async function stateSelec(event) {
        const idstate = event.target.selectedOptions[0].getAttribute("data-id")
        try {
            const response = await fetch("http://localhost:4000/getcity", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ stateid: idstate })
            })
            if (response.ok) {
                const data = await response.json()
                setCities(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function readlengh(event) {
        setTextLength(event.target.textLength)
        addDate(event)
    }

    async function singup() {
        if (Object.keys(user).length === 8) {
            const validateUser = () => {
                for (const property in user) {

                    if (user[property] === "" || user[property] === undefined) {
                        return false
                    }
                }
            }
            if (validateUser() === false) {
                dispatchAlert({ type: "error-visible", dataWarning: { "text": "Hay Campos Vacios" } })
            } else {
                const formdata = new FormData()
                formdata.append("file", user.imgSelect)
                formdata.append("user", user.email)
                try {
                    const response = await fetch("http://localhost:4000/save/img/profile", {
                        method: "POST",
                        body: formdata
                    })
                    
                    if (response.ok) {
                        const data = await response.json()
                        if (data.url) {
                            user.imgSelect = data.url
                            const responseCreate = await fetch("http://localhost:4000/singup", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(user)
                            })

                            if (responseCreate.ok) {
                                const data = await responseCreate.json()

                                if (data.token) {
                                    dispatchAlert({ type: "success-visible", dataWarning: { "text": "Registro Exitoso" } })
                                    setTimeout(() => {
                                        localStorage.setItem("token", data.token)
                                        localStorage.setItem("userId", data.id)
                                        navigate(`/profile/${data.id}/desktop`)
                                    }, 1000)
                                }else{
                                    dispatchAlert({ type: "success-visible", dataWarning: { "text": "Error Inseperado" } })
                                }
                            } else {
                                dispatchAlert({ type: "error-visible", dataWarning: { "text": "Error De Registro" } })
                            }
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            dispatchAlert({ type: "error-visible", dataWarning: { "text": "Hay Campos Vacios" } })
        }
    }

    function prevImg(event) {
        if (event.target.files[0]) {
            console.log(event.target.files[0])
            setUser({ ...user, [event.target.id]: event.target.files[0] })
            setPrev(URL.createObjectURL(event.target.files[0]))
        } else {
            delete user[event.target.id]
        }
    }

    return (
        <>
            <Alert />
            <section className="shadow-e w-10/12 h-5/6 py-5 rounded-lg flex flex-col justify-around content-end items-center text-ebrat-white md:w-3/4">
                <div className='w-32'>
                    <img src='/images/logo-h-w.png' alt='#'></img>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-5/11 gap-2 items-center'>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Nombre de la Empresa</label>
                                <input onChange={addDate} id='name' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2" placeholder="Correo"></input>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Telefono de la Empresa</label>
                                <input onChange={addDate} id='phone' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Contraseña"></input>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Direccion de la Empresa</label>
                                <input onChange={addDate} id='address' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Contraseña"></input>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <label>Descripcion</label>
                                <textarea className='w-3/4 h-40 text-ebrat-black text-sm' maxLength={"500"} onChange={readlengh} id='details'></textarea>
                                <div className='w-3/4 text-right'>
                                    <span>{textLength}/500</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-5/11 items-center'>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Estado</label>
                                <select id='state' onChange={stateSelec} className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                    <option selected className='text-ebrat-black'>Seleccionar Estado</option>
                                    {
                                        states.map(element => {
                                            return <option key={element.id} data-id={element.id} className='text-ebrat-black font-bold'>{element.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Ciudad</label>
                                <select onChange={addDate} id='CityId' className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                    <option selected className='text-ebrat-black'>Seleccionar Ciudad</option>
                                    {
                                        cities.map(element => {
                                            return <option key={element.id} data-id={element.id} className='text-ebrat-black font-bold'>{element.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='flex flex-col w-full gap-5 justify-center items-center'>
                                <div className='w-full flex flex-col items-center'>
                                    <label>Imagen de Perfil</label>
                                    <div className='w-9/12 h-44 p-3 border border-dashed border-ebrat-white flex justify-center'>
                                        <img className='h-full' src={`${prev}`} alt='imgPerfil'></img>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='imgSelect' className='border border-ebrat-white rounded-lg p-2 hover:cursor-pointer'>Seleccionar Foto de Perfil</label>
                                    <input onChange={prevImg} type='file' name='imgSelect' id='imgSelect' className='hidden'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={singup} className='border bg-ebrat-white text-ebrat-black rounded-lg w-32 h-8'>SingUp</button>
                </div>
            </section>
        </>
    )
}

export default SingupData