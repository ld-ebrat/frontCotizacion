import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { getCity, getState, postCreateUser, postSaveImgProfile, postValidate, putUpdateImgProfile, putUser, updateDir } from '../peticiones';
import envrironment from '../environment';

export default function UserCreate() {
    const [textLength, setTextLength] = useState(0);
    const location = useLocation()
    const [states, setState] = useState([])
    const [cities, setCities] = useState([])
    const [userSelect, setUserSelect] = useState()
    const [prev, setPrev] = useState("")
    const [imgSelect, setImgSelect] = useState()

    useEffect(() => {
        if (location.state) {
            setPrev(`${envrironment.url_Back}${location.state.userSelect.imag}`)
            getState().then(res => res.json()).then(data => {
                setState(data)
                setUserSelect(location.state.userSelect)
                getCity(location.state.userSelect.City.StateId).then(resCity => resCity.json()).then(dataCity => {
                    setCities(dataCity)
                    console.log(dataCity)
                })
            })
        } else {
            getState().then(res => res.json()).then(data => setState(data))
        }
    }, [])
    function readlengh(event) {
        setTextLength(event.target.textLength)
    }

    const valitate = location.pathname.split("/").includes("update")

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            isValid
        }
    } = useForm({
        defaultValues: {
            name: location.state ? (location.state.userSelect.fullname) : (""),
            email: location.state ? (location.state.userSelect.email) : (""),
            pass: location.state ? (location.state.userSelect.password) : (""),
            phone: location.state ? (location.state.userSelect.phone) : (""),
            address: location.state ? (location.state.userSelect.address) : (""),
            description: location.state ? (location.state.userSelect.description) : (""),
            imgSelect: location.state ? (location.state.userSelect.imag) : (""),
            CityId: location.state ? (location.state.userSelect.City.id) : (""),
            id: location.state ? (location.state.userSelect.id) : (""),
        }
    })

    const handleState = (event) => {
        console.log()
        var idstate = event.target.selectedOptions[0].getAttribute("data-id")
        getCity(idstate).then(res => res.json()).then(data => setCities(data))
    }

    const handlSelect = (event) => {
        var role
        if (event.target.id === "role") {
            role = event.target.selectedOptions[0].value
            setValue(`${event.currentTarget.id}`, role)
        } else {
            role = event.target.selectedOptions[0].getAttribute("data-id")
            setValue(`${event.currentTarget.id}`, role)
        }

    }
    function prevImg(event) {
        if (event.target.files[0]) {
            console.log(event.target.files[0])
            setImgSelect(event.target.files[0])
            setPrev(URL.createObjectURL(event.target.files[0]))
        } else {
            setImgSelect(undefined)
            setPrev("")
        }
    }

    const handleCreate = (data) => {
        postValidate(data.email).then(res => res.json()).then(dataValidate => {
            if (dataValidate.message === "ok") {
                const formdata = new FormData()
                formdata.append("file", imgSelect)
                formdata.append("user", data.email)
                postSaveImgProfile(formdata).then(res => res.json()).then(dataImg => {
                    postCreateUser(data, dataImg.url).then(res => res.json()).then(data => console.log(data))
                })
            } else {
                console.log("no validate")
            }
        })
    }

    const handleUpdate = (data) => {
        if (imgSelect) {
            console.log("entre imgSelect")
            postValidate(data.email).then(res => res.json()).then(dataValidate => {
                if(data.email === location.state.userSelect.email){
                    const formdata = new FormData()
                    formdata.append("file", imgSelect)
                    formdata.append("user", data.email)
                    formdata.append("imgDelete", data.imgSelect)
                    putUpdateImgProfile(formdata).then(res => res.json()).then(dataImg => {
                        if(dataImg.message === "OK"){
                            putUser(data, dataImg.url).then(res => res.json()).then(dataUser => {
                                console.log(dataUser)
                            })
                        }  
                    })
                }else{
                    if (dataValidate.message === "ok") {
                        console.log("Entre aca")
                        const formdata = new FormData()
                        formdata.append("file", imgSelect)
                        formdata.append("user", data.email)
                        formdata.append("userdelete", location.state.userSelect.email)
                        formdata.append("imgDelete", data.imgSelect)
                        putUpdateImgProfile(formdata).then(res => res.json()).then(dataImg => {
                            if(dataImg.message === "OK"){
                                putUser(data, dataImg.url).then(res => res.json()).then(dataUser => {
                                    console.log(dataUser)
                                })
                            }  
                        })
                    }else{
                        console.log("Correo existente, pruebe con otro")
                    }
                }
                
            })
        } else {
            console.log("No imgSelect")
            postValidate(data.email).then(res => res.json()).then(dataValidate => {
                if (data.email === location.state.userSelect.email) {
                    console.log("No imgSelect Igual Email")
                    putUser(data, data.imgSelect).then(res => res.json()).then(dataUser => {
                        console.log(data)
                        console.log(dataUser)
                    })
                } else {
                    console.log("No imgSelect Igual Email")
                    if (dataValidate.message === "ok") {
                        updateDir({url: data.imgSelect, user: location.state.userSelect.email, dirRename: data.email}).then(res => res.json()).then(dataDir =>{
                            if(dataDir.message === "OK"){
                                console.log(data)
                                putUser(data, dataDir.url).then(res => res.json()).then(dataUser => {
                                    console.log(dataUser)
                                })
                            }
                        })
                    } else {
                        console.log("Correo existente, pruebe con otro")
                    }
                }
            })
        }
    }

    return (
        <form >
            <div className="flex flex-col w-full justify-center items-center gap-5">
                <div className='flex w-full justify-center'>
                    <div className='flex flex-col w-5/11 gap-2 items-center'>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Nombre de la Empresa</label>
                            <input id='name' {...register('name')} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2 text-ebrat-white" placeholder="Nombre de la empresa"></input>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Correo de la empresa</label>
                            <input id='name' {...register('email')} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2 text-ebrat-white" placeholder="Correo"></input>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Contraseña</label>
                            <input id='name' {...register('pass')} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2 text-ebrat-white" placeholder="Contraseña"></input>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Telefono de la Empresa</label>
                            <input id='phone' {...register('phone')} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2 text-ebrat-white" placeholder="Telefono"></input>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Direccion de la Empresa</label>
                            <input id='address' {...register('address')} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 py-1 px-2 text-ebrat-white" placeholder="Direccion"></input>
                        </div>
                        <div className='flex flex-col w-full justify-center items-center'>
                            <label>Descripcion</label>
                            <textarea {...register('description')} className='w-3/4 h-40 text-ebrat-black text-sm' maxLength={"500"} onChange={readlengh} id='details'></textarea>
                            <div className='w-3/4 text-right'>
                                <span>{textLength}/500</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-5/11 items-center'>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Estado</label>
                            <select id='role' onChange={handlSelect} className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                <option selected className='text-ebrat-black'>Seleccionar Estado</option>
                                <option className='text-ebrat-black'>USER</option>
                                <option className='text-ebrat-black'>ADMIN</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Estado</label>
                            <select id='state' onChange={handleState} className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                <option selected className='text-ebrat-black'>Seleccionar Estado</option>
                                {
                                    states.map(element => {
                                        if (element.id === userSelect?.City?.StateId) {
                                            return <option selected key={element?.id} data-id={element?.id} className='text-ebrat-black font-bold'>{element?.name}</option>
                                        }
                                        return <option key={element?.id} data-id={element?.id} className='text-ebrat-black font-bold'>{element?.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <label className="text-ebrat-white">Ciudad</label>
                            <select id='CityId' onChange={handlSelect} className='bg-ebrat-310 outline-none w-full h-10 rounded-lg text-ebrat-305 font-bold pl-2'>
                                <option selected className='text-ebrat-black'>Seleccionar Ciudad</option>
                                {
                                    cities.map(city => {
                                        if (city.id === userSelect?.CityId) {
                                            return <option selected key={city?.id} data-id={city?.id} className='text-ebrat-black font-bold'>{city?.name}</option>
                                        }
                                        return <option key={city?.id} data-id={city?.id} className='text-ebrat-black font-bold'>{city?.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='flex flex-col w-full gap-5 justify-center items-center'>
                            <div className='w-full flex flex-col items-center'>
                                <label>Imagen de Perfil</label>
                                <div className='w-9/12 h-44 p-3 border border-dashed border-ebrat-white flex justify-center'>
                                    <img src={prev} className='h-full' alt='imgPerfil'></img>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='imgSelect' className='border border-ebrat-white rounded-lg p-2 hover:cursor-pointer'>Seleccionar Foto de Perfil</label>
                                <input onChange={prevImg} type='file' name='imgSelect' id='imgSelect' className='hidden'></input>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    valitate === true ? (<>
                        <button type='button' onClick={handleSubmit(handleUpdate)} className='w-36 bg-ebrat-white text-ebrat-black rounded-lg font-bold py-2'>Actualizar Usuario</button>
                    </>) : (<>
                        <button onClick={handleSubmit(handleCreate)} type='button' className='w-36 bg-ebrat-white text-ebrat-black rounded-lg font-bold py-2'>Crear Usuario</button>
                    </>)
                }
            </div>
        </form>
    )
}
