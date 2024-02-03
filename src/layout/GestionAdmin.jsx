function GestionAdmin() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="w-full py-5 px-5 flex flex-col gap-5 items-center">
                    <div className="w-full flex justify-center gap-4">
                        <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                            <label>Nombre</label>
                            <input className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Nombre"></input>
                        </div>
                        <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                            <label>Rol</label>
                            <select className="w-96 h-9 pl-3 rounded-lg border border-ebrat-310 bg-ebrat-transparente text-ebrat-306">
                                <option selected className="text-ebrat-black">Select Option</option>
                                <option className="text-ebrat-black">User</option>
                                <option className="text-ebrat-black">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-center gap-4">
                        <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                            <label>Correo</label>
                            <input id="srh-user" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Correo"></input>
                        </div>
                        <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                            <label>Contraseña</label>
                            <input id="srh-user" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Contraseña"></input>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4">
                <div className="w-11/12 flex justify-between">
                    <div>
                        <div className={`flex items-center gap-2 pl-2 w-96 h-12 bg-ebrat-335 border-ebrat-310 border backdrop-blur-3xl rounded-lg`}>
                            <img src="../images/lupa.png" alt="" className="w-4"></img>
                            <input id="srh-user" className={`outline-none w-11/12 bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Id Usuario"></input>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Crear</button>
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Actualizar</button>
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Eliminar</button>
                    </div>
                </div>
                <div className="w-11/12 max-h-56 overflow-y-auto">
                    <table className="border-collapse table-auto border w-full">
                        <thead>
                            <tr>
                                <th className="border">Id</th>
                                <th className="border">Nombre</th>
                                <th className="border">Rol</th>
                                <th className="border">Correo</th>
                                <th className="border">Contraseña</th>
                                <th className="border">Telefono</th>
                                <th className="border">Ubicacion</th>
                                <th className="border">Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:cursor-pointer">
                                <td className="border text-center">Id</td>
                                <td className="border text-center">Nombre</td>
                                <td className="border text-center">Rol</td>
                                <td className="border text-right">Correo</td>
                                <td className="border text-center">Contraseña</td>
                                <td className="border text-center">Telefono</td>
                                <td className="border text-center">Ubicacion</td>
                                <td className="border text-center">Detalle</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    );
}

export default GestionAdmin;