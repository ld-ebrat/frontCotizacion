import { useEffect, useState } from "react";
import { getAllUsers, postUser } from "../peticiones";
import { useForm } from "react-hook-form";

function GestionAdmin() {

    const [users, setUsers] = useState([])
    const [userSelect, setUserSelect] = useState()
    const {
        register,
        handleSubmit,
        formState: {
            isValid
        }
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            role: "",
            pass: ""
        }
    })
    useEffect(() => {
        getAllUsers("ADMIN").then(res => res.json()).then(data => setUsers(data))
    }, [])

    function onnn(event) {
        const tr = event.target.closest('tr')
        setUserSelect({
            "id": tr.children[0].innerText,
            "name": tr.children[1].innerText,
            "role": tr.children[2].innerText,
            "email": tr.children[3].innerText,
            "pass": tr.children[4].innerText,
        })

    }

    const handleCreate = () => {
        postUser()
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <form>
                    <div className="w-full py-5 px-5 flex flex-col gap-5 items-center">
                        <div className="w-full flex justify-center gap-4">
                            <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                                <label>Nombre</label>
                                <input value={userSelect?.name} {...register("name")} className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Nombre"></input>
                            </div>
                            <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                                <label>Rol</label>
                                <select value={userSelect?.role} {...register("role")} className="w-96 h-9 pl-3 rounded-lg border border-ebrat-310 bg-ebrat-transparente text-ebrat-306">
                                    <option selected className="text-ebrat-black">Select Option</option>
                                    <option className="text-ebrat-black">USER</option>
                                    <option className="text-ebrat-black">ADMIN</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex justify-center gap-4">
                            <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                                <label>Correo</label>
                                <input value={userSelect?.email} {...register("email")} id="srh-user" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Correo"></input>
                            </div>
                            <div className={`w-5/12 flex items-center justify-between gap-2 pl-2`}>
                                <label>Contraseña</label>
                                <input value={userSelect?.pass} {...register("pass")} id="srh-user" className={`outline-none w-96 h-9 pl-3 rounded-lg border-ebrat-310 border bg-ebrat-transparente text-ebrat-306 placeholder-ebrat-306 font-normal`} placeholder="Contraseña"></input>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 flex justify-end">
                        <div className="flex gap-5">
                            <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Crear</button>
                            <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Actualizar</button>
                            <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Eliminar</button>
                        </div>
                    </div>
                </form>

                <div className="w-full flex flex-col items-center gap-4">
                    
                    <div className="w-11/12 max-h-56 overflow-y-auto">
                        <table onClick={onnn} className="border-collapse table-auto border w-full">
                            <thead>
                                <tr>
                                    <th className="border">Id</th>
                                    <th className="border">Nombre</th>
                                    <th className="border">Rol</th>
                                    <th className="border">Correo</th>
                                    <th className="border">Contraseña</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(element => {
                                        return (
                                            <tr key={element.id} className="hover:cursor-pointer">
                                                <td className="border text-center">{element.id}</td>
                                                <td className="border text-center">{element.fullname}</td>
                                                <td className="border text-center">{element.role}</td>
                                                <td className="border text-center">{element.email}</td>
                                                <td className="border text-center">{element.password}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GestionAdmin;