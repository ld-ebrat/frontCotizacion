import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../peticiones";
import { AlertContext } from "../context/AlertContex";
import Alert from "../components/Alert";

function Login() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { stateAlert, dispatchAlert } = useContext(AlertContext)

    useEffect(() => {
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })
    }, [])

    function handleLogin(event) {
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    async function login() {

        const validateUser = () => {
            for (const key in user) {

                if (user[key] === "") {
                    return true
                }
            }
            return false
        }

        if (validateUser()) {
            dispatchAlert({ type: "error-visible", dataWarning: { "text": "Campos Vacios" } })
        } else {
            const response = await postLogin(user)

            if (response.ok) {
                const data = await response.json()
                if (data.message === "OK") {
                    dispatchAlert({ type: "success-visible", dataWarning: { "text": "Success" } })
                    setTimeout(() => {
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("userId", data.id)

                        if (data.type) {
                            navigate(`/admin`)
                        } else {
                            navigate(`/profile/${data.id}/desktop`)
                        }
                    }, 1000)
                } else {
                    dispatchAlert({ type: "error-visible", dataWarning: { "text": data.message } })
                }
            }
        }
    }
    return (
        <>
            <main className="bg-ebrat-335 w-full h-screen flex justify-center items-center font-bold relative overflow-hidden">
                <Alert />
                <section className="shadow-e w-10/12 h-4/5 py-5 rounded-lg flex flex-col justify-around items-center text-ebrat-white md:w-1/3">
                    <div onClick={() => navigate("/")} className="hover:cursor-pointer">
                        <img src="images/logo-h-w.png" alt=""></img>
                    </div>
                    <div className="flex flex-col gap-8 w-full justify-center items-center">
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Correo</label>
                            <input id="email" onChange={handleLogin} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 backdrop-blur-3xl py-1" placeholder="Correo"></input>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Contraseña</label>
                            <input id="pass" onChange={handleLogin} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1" placeholder="Contraseña"></input>
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
                    <div onClick={login} className="w-full flex justify-center">
                        <button className=" bg-ebrat-white w-3/4 h-10 rounded-lg text-ebrat-black">Login</button>
                    </div>
                    <div>
                        <label>¿Eres Nuevo? </label>
                        <Link to={"/singup"} className="underline text-ebrat-150">Sing Up</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;