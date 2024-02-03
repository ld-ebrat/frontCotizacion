import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet, useParams } from 'react-router-dom';
import InfoUser from '../layout/InfoUser';


//flex w-full h-full flex-wrap justify-stretch gap-x-12 gap-y-9 p-6
function Profile() {
    return (
        <>
            <NavBar />
            <main className='bg-ebrat-335 text-ebrat-white w-full h-screen'>
                <InfoUser />
                <div className='bg-ebrat-335 border-t border-ebrat-310'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

/**
 * <section className="w-full h-full border-t border-ebrat-310">

                    <div className="flex z-0 sticky top-20">
                        {
                            localStorage.getItem("token") ? (<SectionProfile />) : (<></>)
                        }
                        <div className='w-full border-l border-ebrat-310'>
                            {
                                localStorage.getItem("token") ? (<Outlet />) : (<Products />)
                            }
                        </div>
                    </div>
                </section>
 */

export default Profile



/**
 *     const [scrollPosition, setScrollPosition] = useState(0);

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
    const scrollControlor = scrollPosition > 100 ? "1" : "2";
    const bor = scrollPosition >= 210 ? "border-b" : "transparente"

 */

/* 
<div className='z-0 flex w-full flex-wrap justify-stretch gap-x-12 gap-y-9 p-6 pl-72'>
                                <div className=" flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-whiterounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 w-72 border border-ebrat-white rounded-md">
                                    <h5>Martillos</h5>
                                    <div className="flex rounded-xl">
                                        <img className="w-52" src="images/martillo-1.jpg" alt=""></img>
                                    </div>
                                    <div>
                                        <button className="border border-solid  w-full h-8">Ver</button>
                                    </div>
                                </div>
                            </div>
                            

                            <span className={`${scrollControlor}`}></span>
                    <div className={`bg-ebrat-335 z-10 flex justify-between items-center sticky top-16 w-full h-20 ${bor} border-ebrat-310 px-7`}>
                        <div>
                            <div className={`flex items-center gap-2 pl-2 w-96 h-12 bg-ebrat-335 border-ebrat-310 border backdrop-blur-3xl rounded-lg`}>
                                <img src="images/lupa.png" alt="" className="w-4"></img>
                                <input id="srh-user" className={`outline-none w-11/12 bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Buscar Categoria"></input>
                            </div>
                        </div>
                        <button className="rounded-lg bg-ebrat-325 w-28 h-11">Cotizar todo</button>
                    </div>
*/