import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom"; /*useLocation*/ //const location = useLocation();

function NavBar() {
    const navigate = useNavigate();
    const [display, setDisplay] = useState("hidden")
    const userId = localStorage.getItem("userId")
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        function handleScroll() {
            const position = window.scrollY;
            setScrollPosition(position);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const backgroundColor = scrollPosition > 20 ? '335' : 'transparente';
    var borr = scrollPosition > 20 ? ("border-b") : ("transparente");

    function handleOptionUser(event) {
        if (event.target.id === "close-user-panel" || event.target.id === "div-out") {
            document.body.style.overflow = "auto"
            setDisplay("hidden")
        } else {
            document.body.style.overflow = "hidden"
            document.documentElement.style.overflow = "visible"
            setDisplay("fixed")
        }
    }

    return (
        <header>
            <nav className={`h-16 z-40 fixed flex justify-between items-center p-3 px-4 w-full border-ebrat-310 ${borr} bg-ebrat-${backgroundColor} text-ebrat-white font-bold transition-colors duration-200`}>
                <div className="hover:cursor-pointer" onClick={() => { navigate("/") }}>
                    <img className="w-32" src="/images/logo-h-w.png" alt="#"></img>
                </div>
                <div className="flex">
                    {
                        localStorage.getItem("token") ? (
                            <div className=" bg-ebrat-320 w-10 h-10 rounded-lg flex items-center justify-center hover:cursor-pointer" onClick={handleOptionUser}>
                                <img src="/images/account-w-16.png" alt="logo-user" className="rounded-[100%] border-2 border-ebrat-white"></img>
                            </div>
                        )
                            :
                            (
                                <div className="flex items-center justify-center">
                                    <Link to={"/login"}>
                                        <button className={`text-lg rounded-lg w-28 h-9 bg-ebrat-310 backdrop-blur-xl text-ebrat-white`}>Login</button>
                                    </Link>
                                </div>
                            )
                    }
                </div>
            </nav>
            <div className={`${display} flex bg-ebrat-white z-50 w-screen bg-opacity-20 h-screen text-ebrat-white`}>
                <div id="div-out" className="w-4/5 h-full" onClick={handleOptionUser}></div>
                <div className="py-5 px-5 bg-ebrat-335 absolute right-0 rounded-s-xl border-l border-ebrat-310 shadow-e shadow-ebrat-black h-full w-1/5 flex flex-col gap-3">
                    <div className="sticky top-0 flex justify-between items-center p-2 border-b">
                        <div className="flex gap-2 items-center justify-center">
                            <img src="/images/account-w-24.png" alt="logo-user" className="border rounded-full w-9"></img>
                            <p>Leiner Ebrat</p>
                        </div>
                        <img src="/images/close-g-24.png" alt="clase_panel" id="close-user-panel" className="rounded-lg bg-ebrat-320 p-1 w-8 h-8 flex justify-center items-center hover:cursor-pointer" onClick={handleOptionUser}></img>
                    </div>
                    <div className="w-full h-full flex flex-col content-between">
                        <div className="flex flex-col gap-5 overflow-auto h-full">
                            <Link to={`/profile/${userId}/desktop`} className="flex gap-3">
                                <img src="/images/desktop-g-24.png" alt=""></img>
                                <button>Desktop</button>
                            </Link>
                            <Link to={`/profile/${userId}/product`} className="flex gap-3">
                                <img src="/images/producto-g-24.png" alt=""></img>
                                <button>Productos</button>
                            </Link>
                        </div>
                        <div onClick={()=>{
                            localStorage.clear()
                            navigate("/")
                        }} className="flex  gap-3">
                            <img src="/images/cerrar-sesion-g-24.png" alt=""></img>
                            <button>Cerrar Sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;


/**
 * 
 * <section className="flex justify-end w-2/5 items-center">
                    <div className={`flex items-center gap-2 pl-2 w-96 h-9 bg-ebrat-310 backdrop-blur-3xl rounded-lg`}>
                        <span className={`opacity-100 text-ebrat-306`}>@</span>
                        <span className={`opacity-100 text-ebrat-306`}>|</span>
                        <input id="srh-user" className={`outline-none w-11/12 bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Nombre Usuario"></input>
                    </div>
                </section>
 */