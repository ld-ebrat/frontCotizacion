import React, { useContext } from 'react'
import { AlertContext } from '../context/AlertContex'

const Alert = () => {
    const { stateAlert, dispatchAlert } = useContext(AlertContext)
    return (
        <>
            <div className={`bg-ebrat-335 absolute h-10 px-5 flex justify-center items-center shadow-g border rounded-lg top-14 ${stateAlert.dataWarning.move} transition-[right] ease-in-out delay-50 duration-300`}>
                <span className={`${stateAlert.dataWarning.color}`}>{stateAlert.dataWarning.text}</span>
            </div>
        </>
    )
}

export default Alert