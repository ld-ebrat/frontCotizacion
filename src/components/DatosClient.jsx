import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom'
import { getInfo, postClient, postEmail, postQuotation, postQuotationProduct } from '../peticiones'
import { render } from '@react-email/render'
import Email from './email'


function DatosClient({ products, total }) {
    const userId = useParams()
    const [quotationId, setQuotationId] = useState()

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
            phone: ""
        }
    })

    const handleClient = (data) => {
        getInfo(userId.user)
        postClient(data, userId.user).then(response => response.json())
            .then(data =>
                postQuotation({ clientId: data.id, userId: userId.user, total }).then(res => res.json()
                    .then(data => {
                        products.forEach(elemnt => {
                            console.log(elemnt)
                            postQuotationProduct({ quotationId: data.id, productId: elemnt.id, amount: elemnt.count }).then(res => res.json(9))
                                .then(data => {
                                    postEmail(render(<Email product={products} total={total} />), data.email).then(res => res.json()).then(data => console.log(data))
                                })
                        })
                    }))
            )
    }
    return (
        <>
            <div className='fixed item top-0 z-10 w-full h-full bg-ebrat-black bg-opacity-50'>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-1/2  pb-5 px-2 pt-2 justify-between items-center flex flex-col gap-4 bg-ebrat-335 shadow-e rounded-lg'>
                        <div className='w-full flex justify-end'>
                            <img src='/images/close-g-24.png' alt='close'></img>
                        </div>
                        <div>
                            <h2 className='font-bold text-lg'>Ingrese Sus Datos</h2>
                        </div>
                        <form className='w-full flex flex-col gap-4 items-center'>
                            <div className='w-3/4 flex flex-col items-center'>
                                <div className="flex flex-col w-3/4">
                                    <label className="text-ebrat-white">Nombre</label>
                                    <input id='name' type='text' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2" placeholder="Nombre" {...register('name')}></input>
                                </div>
                                <div className="flex flex-col w-3/4">
                                    <label className="text-ebrat-white">Correo</label>
                                    <input id='email' type='email' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2" placeholder="Correo" {...register('email', { required: { value: true, message: "Campo Requerido" } })}></input>
                                </div>
                                <div className="flex flex-col w-3/4">
                                    <label className="text-ebrat-white">Telefono</label>
                                    <input id='phone' type='tel' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 px-2" placeholder="Telefono" {...register('phone')}></input>
                                </div>
                            </div>
                            <div>
                                <button className='border rounded-lg border-ebrat-310 w-24 h-10' onClick={handleSubmit(handleClient)}>Cotizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatosClient