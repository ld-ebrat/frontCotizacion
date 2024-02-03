import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    return (
        <>
            <main className="flex bg-ebrat-335 w-full h-screen text-ebrat-330">
                <section className="h-full border-ebrat-310 border-r w-1/6 flex flex-col items-center justify-between gap-4 py-5">
                    <div className="flex flex-col items-center w-full gap-4">
                        <button className="" onClick={()=>navigate("/admin/Guser")}>Usuario</button>
                        <button onClick={()=>navigate("/admin/Gadmin")}>Admins</button>
                    </div>
                    <div>
                        <button>Cerrar Sesion</button>
                    </div>
                </section>
                <section className="w-full">
                    <Outlet />
                </section>
            </main>
        </>
    );
}

export default Admin;