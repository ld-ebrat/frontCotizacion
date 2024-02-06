import { useEffect, useState } from "react";
import { getAllUsers } from "../peticiones";

function GestionUser() {

    const [users, setUsers] = useState([])
    const [userSelect, setUserSelect] = useState()

    useEffect(() => {
        getAllUsers("USER").then(res => res.json()).then(data => setUsers(data))
    }, [])

    function onnn(event) {
        const tr = event.target.closest('tr')
        var description = users.find(obj => obj.id === tr.children[0].innerText)
        setUserSelect({
            "id": tr.children[0].innerText,
            "name": tr.children[1].innerText,
            "role": tr.children[2].innerText,
            "email": tr.children[3].innerText,
            "pass": tr.children[4].innerText,
            "phone": tr.children[5].innerText,
            "address": tr.children[6].innerText,
            "description": description.description
        })

    }
    return (
        <>
            <div className="w-full py-5 px-5 flex flex-col gap-5 items-center">
                <div className="w-full flex justify-center gap-4">
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Nombre</label>
                        <input id="name" value={userSelect?.name} className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Nombre"></input>
                    </div>
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Rol</label>
                        <select id="role" value={userSelect?.role} className="w-96 h-9 pl-3 rounded-lg border border-ebrat-310 bg-ebrat-transparente text-ebrat-306">
                            <option selected className="text-ebrat-black">Select Option</option>
                            <option id="USER" className="text-ebrat-black">USER</option>
                            <option id="ADMIN" className="text-ebrat-black">ADMIN</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Correo</label>
                        <input value={userSelect?.email} id="email" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Correo"></input>
                    </div>
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Contraseña</label>
                        <input value={userSelect?.pass} id="pass" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Contraseña"></input>
                    </div>

                </div>
                <div className="w-full flex justify-center gap-4">
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Telefono</label>
                        <input value={userSelect?.phone} id="phone" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Telefono"></input>
                    </div>
                    <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                        <label>Ubicacion</label>
                        <input value={userSelect?.address} id="address" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Ubicacion"></input>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="w-11/12 flex flex-col items-center">
                        <label>description</label>
                        <textarea id="description" value={userSelect?.description} className="w-full h-32 outline-none text-ebrat-black p-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-11/12 flex justify-end">
                    <div className="flex gap-5">
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Crear</button>
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Actualizar</button>
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Eliminar</button>
                    </div>
                </div>
                <div className="w-11/12 max-h-56 overflow-y-auto">
                    <table onClick={onnn} className="border-collapse table-auto border w-full">
                        <thead>
                            <tr>
                                <th className="border">Id</th>
                                <th className="border">Nombre</th>
                                <th className="border">Rol</th>
                                <th className="border">Correo</th>
                                <th className="border">Contraseña</th>
                                <th className="border">Actualizar</th>
                                <th className="border">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(element => {
                                    return (
                                        <tr key={element?.id} className="hover:cursor-pointer">
                                            <td className="border text-center">{element?.id}</td>
                                            <td className="border text-center">{element?.fullname}</td>
                                            <td className="border text-center">{element?.role}</td>
                                            <td className="border text-center">{element?.email}</td>
                                            <td className="border text-center">{element?.password}</td>
                                            <td className="border text-center">
                                                <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-ebrat-120'>
                                                    <img src='/images/edit-w-24.png' alt='edit-Produt'></img>
                                                </button>
                                            </td>
                                            <td className="border text-center">
                                                <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-hunt-2.2'>
                                                    <img src='/images/close-w-24.png' alt='delete-Product'></img>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default GestionUser;