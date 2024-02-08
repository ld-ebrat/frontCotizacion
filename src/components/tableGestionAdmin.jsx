import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../peticiones'
import { useNavigate } from 'react-router-dom'

function TableGestionAdmin() {
    const [users, setUsers] = useState([])
    const [userSelect, setUserSelect] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getAllUsers().then(res => res.json()).then(data => setUsers(data))
    }, [])

    const handleUser = (event)=>{
        var idUser = event.currentTarget.parentElement.children[0].innerText

        console.log(idUser)
        console.log(users.find(elemt => elemt.id === idUser))
        if(event.target.parentElement.tagName === "BUTTON"){
            navigate("/admin/Guser/update",{
                state: {
                    userSelect: users.find(elemt => elemt.id === idUser)
                }
            })
        }
    }

    return (
        <>
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-11/12 flex justify-end">
                    <div onClick={()=>navigate("/admin/Guser/create")} className="flex gap-5">
                        <button className="border border-ebrat-310 w-24 h-10 rounded-lg">Crear</button>
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
                                <th className="border">Actualizar</th>
                                <th className="border">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(element => {
                                    return (
                                        <tr key={element?.id}>
                                            <td className="border text-center py-2">{element?.id}</td>
                                            <td className="border text-center py-2">{element?.fullname}</td>
                                            <td className="border text-center py-2">{element?.role}</td>
                                            <td className="border text-center py-2">{element?.email}</td>
                                            <td className="border text-center py-2">{element?.password}</td>
                                            <td onClick={handleUser} className="border text-center py-2">
                                                <div className="w-full h-full flex justify-center">
                                                    <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-ebrat-120'>
                                                        <img src='/images/edit-w-24.png' alt='edit-Produt'></img>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="border text-center py-2">
                                                <div className="w-full h-full flex justify-center">
                                                    <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-hunt-2.2'>
                                                        <img src='/images/close-w-24.png' alt='delete-Product'></img>
                                                    </button>
                                                </div>

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
    )
}

export default TableGestionAdmin