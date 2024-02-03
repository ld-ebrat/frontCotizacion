import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContex'
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { AlertContext } from '../context/AlertContex';
import { postValidate } from '../peticiones';

const SingupPrin = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(UserContext);
    const { stateAlert, dispatchAlert } = useContext(AlertContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })
    }, [])

    function addDate(event) {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })

    }
    function singNext() {
        (user.email && user.pass) ? (((user.email.indexOf("@") !== -1) && (user.email.split("@").length === 2)
            && ((user.email.split("@")[1].split(".")[user.email.split("@")[1].split(".").length - 1] === "com")
                || (user.email.split("@")[1].split(".")[user.email.split("@")[1].split(".").length - 1] === "co"))) ? (user.pass.length > 8 ? (next()) : (dispatchAlert({ type: "error-visible", dataWarning: { "text": "La Contraseña debe ser mayor de 8"}}))) : (dispatchAlert({ type: "error-visible", dataWarning: { "text": "Formato del correo o contraseña incorrecto"}}))) : (dispatchAlert({ type: "error-visible", dataWarning: { "text": "Campos Vacios O Faltan Datos"}}))

    }
    async function next() {
        try {
            const response = await postValidate(user.email)

            if (response.ok) {
                const data = await response.json()

                if (data.message === "ok") {
                    dispatchAlert({ type: "success-visible", dataWarning: { "text": "success" } })
                    setTimeout(() => {
                        dispatch({ type: "addDate", user: user })
                        navigate("/singup/data")
                    }, 500)
                } else {
                    dispatchAlert({ type: "error-visible", dataWarning: { "text": data.message } })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Alert />
            <section className="shadow-e w-10/12 h-5/6 py-5 rounded-lg flex flex-col justify-around items-center text-ebrat-white md:w-1/3 overflow-hidden">
                <div>
                    <img src="images/logo-h-w.png" alt=""></img>
                </div>
                <div className="flex flex-col gap-8 w-full justify-center items-center">
                    <div className="flex flex-col w-3/4">
                        <label className="text-ebrat-white">Correo</label>
                        <input onChange={addDate} id='email' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Correo" type='email'></input>
                    </div>
                    <div className="flex flex-col w-3/4">
                        <label className="text-ebrat-white">Contraseña</label>
                        <input onChange={addDate} id='pass' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Contraseña" type='password'></input>
                        <span className='text-xs text-ebrat-305'>La Contraseña debe ser mayor a 8 caracteres</span>
                    </div>
                </div>
                <div className="w-3/4 flex justify-between items-center">
                    <hr className="bg-ebrat-white w-5/12"></hr>
                    o
                    <hr className="bg-ebrat-white w-5/12"></hr>
                </div>
                <div className="flex gap-6">
                    <div className="border rounded-full h-10 w-10 gap-5 flex justify-center items-center">
                        <img className="w-5 h-5" src="images/facebook.png" alt=""></img>
                    </div>
                    <div className="border rounded-full h-10 w-10 gap-5 flex justify-center items-center">
                        <img className="w-5 h-5" src="images/google.png" alt=""></img>
                    </div>
                    <div className="border rounded-full flex justify-center items-center h-10 w-10">
                        <img className="w-5 h-5" src="images/twitter-b.png" alt=""></img>
                    </div>
                    <div className="border rounded-full flex justify-center items-center h-10 w-10">
                        <img className="w-5 h-5" src="images/linkedin-bl.png" alt=""></img>
                    </div>
                </div>
                <div onClick={singNext} className="w-full flex justify-center hover:cursor-pointer">
                    <button className=" bg-ebrat-white w-3/4 h-10 rounded-lg text-ebrat-black">SingUp</button>
                </div>
                <div>
                    <label>¿Ya tienes Cuenta? </label>
                    <Link to={"/login"} className="underline text-ebrat-150">Login</Link>
                </div>
            </section>
        </>
    )
}

export default SingupPrin