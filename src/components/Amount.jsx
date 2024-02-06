import React, { useEffect, useState } from 'react'

function Amount({ onChangeAmount, productId, total, price }) {

    const [count, setCount] = useState(1)
    const [totalPay, setTotalPay] = useState(total)
    useEffect(() => {
        if (onChangeAmount) {
            onChangeAmount(count, productId, totalPay)
        }
    }, [count])

    // function handleAmout(event, operation) {

    //     if(operation === "-"){
    //         if(count >0){
    //             setCount((previosvalor) => previosvalor - 1)
    //         }
    //     }else{
    //         setCount((previosvalor) => previosvalor + 1)
    //     }

    //     onChangeAmount(count, productId);
    // }
    return (
        <>
            <div>
                <h4>Cantidad</h4>
                <div className="w-full flex">
                    <button onClick={() => {
                        total = total - price
                        setTotalPay(total)
                        console.log(total)
                        setCount((previosCount) => count > 0 ? (previosCount - 1) : (0))
                    }
                    } className="w-full rounded-2xl bg-ebrat-err">-</button>
                    <span placeholder='0' className="text-ebrat-white text-center w-full outline-none border-b bg-ebrat-transparente">{count}</span>
                    <button onClick={() => {
                        total = total + price
                        setTotalPay(total)
                        console.log(total)
                        setCount((previosCount) => previosCount + 1)
                    }
                    } className="w-full rounded-2xl bg-ebrat-success">+</button>
                </div>
            </div>
        </>
    )
}

export default Amount