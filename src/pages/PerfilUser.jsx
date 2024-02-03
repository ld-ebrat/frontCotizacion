import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


function PerfilUser() {
    const navigate = useNavigate()
    const onnclick = (event) => {
        navigate(`/perfilUser/${event.target.id}`)
    }
    return (
        <>
            <NavBar></NavBar>
            <main className="overflow-hidden w-full">
                <div className="flex h-screen bg-ebrat-335 text-ebrat-330 pt-16">
                    <div className="flex flex-col w-1/6 h-full justify-between py-5 border-r border-ebrat-310">
                        <div className="flex flex-col gap-3 justify-center">
                            <button onClick={onnclick}>Escritorio</button>
                            <button id="category" onClick={onnclick}>Productos y Categorias</button>
                            <button id="account" onClick={onnclick}>Cuenta</button>
                        </div>
                        <div className="flex w-full justify-center">
                            <button>Cerrar Sesion</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center h-screen overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}

export default PerfilUser;