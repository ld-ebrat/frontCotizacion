import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function UserCreate() {
    const [textLength, setTextLength] = useState(0);

    function readlengh(event) {
        setTextLength(event.target.textLength)
    }

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            isValid
        }
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            description: "",
            state:"",
            CityId:""
        }
    })
    return (
        <form>
            <section className="shadow-e w-10/12 h-5/6 py-5 rounded-lg flex flex-col justify-around content-end items-center text-ebrat-white md:w-3/4">
                <div className="flex flex-col w-full justify-center items-center">
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-5/11 gap-2 items-center'>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Nombre de la Empresa</label>
                                <input id='name' {...register()} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2" placeholder="Correo"></input>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Telefono de la Empresa</label>
                                <input id='phone' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Contraseña"></input>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Direccion de la Empresa</label>
                                <input id='address' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2" placeholder="Contraseña"></input>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <label>Descripcion</label>
                                <textarea className='w-3/4 h-40 text-ebrat-black text-sm' maxLength={"500"} onChange={readlengh} id='details'></textarea>
                                <div className='w-3/4 text-right'>
                                    <span>{textLength}/500</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-5/11 items-center'>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Estado</label>
                                <select id='state' className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                    <option selected className='text-ebrat-black'>Seleccionar Estado</option>
                                    {
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Ciudad</label>
                                <select id='CityId' className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                    <option selected className='text-ebrat-black'>Seleccionar Ciudad</option>
                                    {
                                    }
                                </select>
                            </div>
                            <div className='flex flex-col w-full gap-5 justify-center items-center'>
                                <div className='w-full flex flex-col items-center'>
                                    <label>Imagen de Perfil</label>
                                    <div className='w-9/12 h-44 p-3 border border-dashed border-ebrat-white flex justify-center'>
                                        <img className='h-full' alt='imgPerfil'></img>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='imgSelect' className='border border-ebrat-white rounded-lg p-2 hover:cursor-pointer'>Seleccionar Foto de Perfil</label>
                                    <input type='file' name='imgSelect' id='imgSelect' className='hidden'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}
