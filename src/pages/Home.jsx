
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { getUsers } from "../peticiones.js";
import envrironment from "../environment.js";
import { useNavigate } from "react-router-dom";
function Home() {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(1)
    const navitate = useNavigate()
    useEffect(() => {
        getUsers().then(res => res.json()).then(data => setUsers(data))
    },[])

    const handleUser = (event)=>{
        navitate(`/profile/${event.currentTarget.id}`)
        console.log(event.currentTarget)
    }
    const handleCount = ()=>{
        setCount(prev => prev+1)
        return count
    }
    return (
        <>
            <NavBar />
            <main className="w-full bg-ebrat-black text-ebrat-white">

                <div style={{ backgroundImage: `url("images/coti.png")` }} className=" flex justify-center items-center text-3xl text-ebrat-white w-full h-screen bg-cover">
                    <div className="w-full h-full flex flex-col gap-10 justify-center items-center text-ebrat-white from-ebrat-335 from-10% to-ebrat-320 to-100% bg-gradient-to-t">
                        <p className="text-4xl px-52 gap-10 flex flex-col justify-center text-center items-center"><span className="text-8xl font-bold">COTEB</span> El mejor lugar para cotizar, mejores precios, mejores empresas y mejor servicio. <span>COTIZA CON NOSOTROS, TE ESPERAMOS</span> </p>
                        <div className="flex gap-10 font-bold">
                            <button className="w-32 h-10 px-2 flex justify-center items-center bg-ebrat-310 rounded-lg backdrop-blur-xl text-lg">Get Started</button>
                            <button className="w-32 h-10 px-2 flex justify-center items-center bg-ebrat-310 rounded-lg backdrop-blur-xl text-lg">Cotizar</button>
                        </div>
                    </div>
                </div>
                <section className="h-screen w-full bg-ebrat-335">
                    <div className="flex">
                        <div className="w-full mr-3">
                            <div className="w-full px-5">
                                <div className="flex justify-stat border-b-[1px] border-ebrat-310 pb-5">
                                    <div className="w-1/2 text-ebrat-305">Empresa</div>
                                </div>
                                <div className="font-bold text-lg">
                                    {
                                        users.map(element => {
                                            return (
                                                <div key={element?.id} id={element?.id} onClick={handleUser}>
                                                    <div className="flex justify-start items-center pt-5">
                                                        <div className="w-1/2 flex items-center gap-5">
                                                            <img className="shadow-f rounded-2xl w-24 h-20" src={`${envrironment.url_Back}${element?.imag}`} alt="#"></img>
                                                            <span>{element.fullname}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;