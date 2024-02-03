
import LineGraph from "../components/Graph.jsx";
import NavBar from "../components/NavBar";
function Home() {
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
                    <div className="w-full text-right px-5 mb-5">
                        <div>
                            <button className="bg-ebrat-325 rounded-md w-24 h-10">Ver Todos</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 mr-3">
                            <div className="w-full px-5">
                                <div className="flex justify-around border-b-[1px] border-ebrat-310 pb-5">
                                    <div className="w-12 text-ebrat-305">#</div>
                                    <div className="w-1/2 text-ebrat-305">Empresa</div>
                                    <div className="w-1/5 text-right text-ebrat-305"># Cotizacion</div>
                                    <div className="w-1/5 text-right text-ebrat-305">Grafico</div>
                                </div>
                                <div className="font-bold text-lg">
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">1</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/portatil-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">2</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/martillo-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">3</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/martillo.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">4</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">5</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/portatil-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-1/2 ml-3">
                            <div className="w-full px-5">
                                <div className="flex justify-around border-b-[1px] pb-5 border-ebrat-310">
                                    <div className="w-12 text-ebrat-305">#</div>
                                    <div className="w-1/2 text-ebrat-305">Empresa</div>
                                    <div className="w-1/5 text-right text-ebrat-305"># Cotizacion</div>
                                    <div className="w-1/5 text-right text-ebrat-305">Grafico</div>
                                </div>
                                <div className="text-lg font-bold">
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">1</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/portatil-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">2</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/martillo-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">3</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/martillo.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">4</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex justify-around items-center pt-5">
                                            <div className="w-12">5</div>
                                            <div className="w-1/2 flex items-center gap-5">
                                                <img className="shadow-f rounded-2xl w-24 h-20" src="images/portatil-1.jpg" alt="#"></img>
                                                <span>Tecnologi</span>
                                            </div>
                                            <div className="w-1/5 text-right">100</div>
                                            <div className="flex justify-end w-1/5 h-[50px]">
                                                <LineGraph />
                                            </div>
                                        </a>
                                    </div>
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