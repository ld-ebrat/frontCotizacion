import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Amount from './Amount'
import { getProducts } from '../peticiones'
import envrironment from '../environment'
import DatosClient from './DatosClient'

function Product() {
    const userId = useParams()
    const [products, setProducts] = useState([])
    const [quot, setQuot] = useState(<></>)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getProducts(userId.user).then(response => response.json()).then(data => setProducts(data))
    }, [userId])
    useEffect(()=>{
        console.log(total)
    },[total])

    function handleCheck(event) {
        const contParent = event.target.parentElement
        const checkbox = event.target.checked
        gestClass(contParent, checkbox, event.currentTarget.id)
    }

    function gestClass(tag, checked, id) {
        if (checked) {
            tag.classList.add("bg-ebrat-150", "rounded-lg", "border-ebrat-150", "bg-opacity-10")
            tag.classList.remove("border-ebrat-transparente")

            var product =products.find(obj => obj.id === id)
            product.select = true
            if(!product.count){
                product.count = 1
                product.total = 1*product.price
                setTotal((previosvalor)=> previosvalor + product.price)
            }

            console.log(product)
        } else {
            tag.classList.add("border-ebrat-transparente")
            tag.classList.remove("bg-ebrat-150", "rounded-lg", "border-ebrat-150", "bg-opacity-10")
            products.find(obj => obj.id === id).select = false
        }
    }

    const handleChangeAmount = (count, productId, total) => {
        var product = products.find(obj => obj.id === productId)
        product.count = count
        product.total = count * product.price
        setTotal(total)
        console.log(total)
        console.log(product)
    }

    const handleQuotation = ()=>{
        console.log(products)
        if(products.filter(obj => obj.select === true).length > 0){
            console.log(products.filter(obj => obj.select === true))
            setQuot(<DatosClient products={products.filter(obj => obj.select === true)} total={total}/>)
        }        
    }
    return (
        <>
            { 
                quot
            }
            <div className='sticky top-16 w-full border-b border-ebrat-310 py-2 px-4  flex justify-end items-center bg-ebrat-335'>
                {
                    localStorage.getItem("token") ? (
                        <div className='flex gap-5 py-2 px-5'>
                            <Link to={`/profile/${userId.user}/product/add`} className='flex justify-center items-center bg-ebrat-success w-44 h-12 bg-opacity-80 font-medium rounded-lg p-2'>Nuevo Producto</Link>
                        </div>

                    ) : (
                        <button onClick={handleQuotation} className='border border-ebrat-310 rounded-lg w-28 h-10'>Cotizar Todo</button>
                    )
                }
            </div>

            {
                products?.map(product => {
                    return (
                        <div key={product?.id} className={`w-11/12 flex justify-evenly py-2 mx-5 border-2 border-opacity-50 border-ebrat-transparente`}>
                            <input type='checkbox' id={`${product?.id}`} onChange={handleCheck} className='hidden checked:bg-ebrat-success'></input>
                            <label htmlFor={`${product?.id}`} className='w-10/12'>
                                <div className="flex flex-col w-full h-48 justify-between border border-[#ffc744] rounded-lg py-2 px-5 gap-5">
                                    <div className='flex justify-between'>
                                        <h2 id='name' className="font-bold text-2xl text-ebrat-white">{product?.name}</h2>
                                        {
                                            localStorage.getItem("token") ? (
                                                <div className='flex gap-5'>
                                                    <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-ebrat-120'>
                                                        <img src='/images/edit-w-24.png' alt='edit-Produt'></img>
                                                    </button>
                                                    <button className='flex items-center justify-center w-8 h-8 rounded-lg bg-hunt-2.2'>
                                                        <img src='/images/close-w-24.png' alt='delete-Product'></img>
                                                    </button>
                                                </div>
                                            ) : (
                                                <></>
                                            )
                                        }

                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="h-28 flex justify-center">
                                            <img src={`${envrironment.url_Back}${product?.imag}`} alt={`${product?.name}`}></img>
                                        </div>
                                        <div className="flex flex-col justify-start w-4/12 h-28">
                                            <h4 className="font-bold text-base">Detalles</h4>
                                            <p id='details' className="text-sm text-ebrat-330">{product?.details}</p>
                                        </div>
                                        <div className="w-1/4 h-full flex flex-col justify-around items-center">
                                            <div className="w-3/4 flex flex-col gap-3">
                                                <div className="flex flex-col">
                                                    <span className="text-ebrat-white">Precio</span>
                                                    <span id='price' className="text-[#ffc744] text-xl">$ {product?.price.toLocaleString('en-US')}</span>
                                                </div>
                                                {
                                                    localStorage.getItem("token") ? (<></>) : (<Amount productId={product.id} total={total} price={product.price} onChangeAmount={(count, productId, total) => handleChangeAmount(count, productId, total)} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Product