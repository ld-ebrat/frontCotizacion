import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postImgProduct, postProduct } from '../peticiones'
import { AlertContext } from '../context/AlertContex'
import Alert from '../components/Alert'

function ProductCU() {
    const [product, setProduct] = useState({})
    const [user, setUser] = useState()
    const [prevImg, setPrevImg] = useState("/images/picture-96.png")
    const navigate = useNavigate()
    const { stateAlert, dispatchAlert } = useContext(AlertContext)

    useEffect(() => {
        if (localStorage.getItem("token")) {

            fetch("http://localhost:4000/get-infoUser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("token")
                }
            })
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => { console.log("Ocurrio un error en la peticion", error) })
        }
        dispatchAlert({ type: "error-hidden", dataWarning: { "text": "Campos Vacios" } })
    }, [])


    function handlePrevImg(event) {
        if (event.target.files[0]) {
            setPrevImg(URL.createObjectURL(event.target.files[0]))
            setProduct({
                ...product,
                [event.target.id]: event.target.files[0]
            })
        } else {
            setPrevImg("/images/picture-96.png")
            delete product[event.target.id]
        }
    }

    function handleProduct(event) {
        setProduct({
            ...product,
            [event.target.id]: event.target.value
        })
        if (event.target.id === "price") {
            product[event.target.id] = Number(product[event.target.id]).toLocaleString('en-US')
        }
        if (product[event.target.id] === "") {
            delete product[event.target.id]
        }
    }

    async function createProduct() {
        product["idUser"] = user.id
        const formdata = new FormData()
        formdata.append("file", product.selectImg)
        formdata.append("email", user.email)
        formdata.append("name", product.name)

        try {
            const response = await postImgProduct(formdata)

            if (response.ok) {
                const data = await response.json()
                product.selectImg = data.url

                const responseProduct = await postProduct(product)

                if(responseProduct.status === 200){
                    dispatchAlert({ type: "success-visible", dataWarning: { "text": "Producto Guardado Correctamente" } })
                    setTimeout(()=>{
                        dispatchAlert({ type: "success-hidden", dataWarning: { "text": "Producto Guardado Correctamente" } })
                    }, 2000)
                }
                // fetch("http://localhost:4000/create/product", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(product)
                // })
                //     .then(response => response.json())
                //     .then(data => { console.log("Todo guardado Correctamente", data) })
                //     .catch(error => { console.log("A ocurrido un erro: ", error) })
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className='flex w-full border-b border-ebrat-310 pl-5 py-3 gap-2'>
                <div onClick={() => { navigate(-1) }} className='flex gap-1 hover:cursor-pointer'>
                    <span>&lt;-</span>
                    <span className='underline'>Back</span>
                </div>
            </div>
            <div className='w-full flex flex-col justify-evenly py-2 px-8 gap-8 items-center relative overflow-x-hidden'>
                <Alert />
                <div className='w-full flex justify-center'>
                    <div className='w-5/11 flex flex-col gap-5'>
                        <div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Nombre Del Producto</label>
                                <input id='name' onChange={handleProduct} className="outline-none w-full h-10 rounded-lg bg-ebrat-310 backdrop-blur-3xl py-1 pl-2" placeholder="Nombre"></input>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Precio Del Producto</label>
                                <input id='price' onChange={handleProduct} type='' className="outline-none w-full h-10 rounded-lg bg-ebrat-310 backdrop-blur-3xl py-1 pl-2" placeholder="Precio"></input>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col w-3/4">
                                <label className="text-ebrat-white">Detalles</label>
                                <textarea id='details' onChange={handleProduct} className="outline-none w-full h-56 rounded-lg bg-ebrat-310 backdrop-blur-3xl py-1 pl-2" placeholder="Detalles"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='w-5/11 flex flex-col gap-5'>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='w-full h-64 flex items-center justify-center'>
                                <img src={prevImg} alt='imagen_Producto' className='h-full'></img>
                            </div>
                            <label htmlFor='selectImg' className='bg-ebrat-white rounded-lg text-ebrat-black font-bold p-2'>Seleccionar Imagen</label>
                            <input type='file' id='selectImg' onChange={handlePrevImg} className='hidden'></input>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button onClick={createProduct} className='w-36 bg-ebrat-white text-ebrat-black rounded-lg font-bold'>Crear Nuevo Producto</button>
                    <button className='w-36 bg-ebrat-white text-ebrat-black rounded-lg font-bold'>Actualizar Producto</button>
                </div>
            </div>
        </>
    )
}

export default ProductCU