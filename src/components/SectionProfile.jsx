import { useNavigate } from "react-router-dom";
import React from 'react'

function SectionProfile() {
    const navigate = useNavigate();
    const onnclick = (event) => {
        navigate(`/profile/${event.target.id}`)
    }

    return (
        <>
            <div className={`bg-ebrat-335 w-1/5 h-full justify-between py-5 border-ebrat-310`}>
                <div className="flex flex-col gap-4 justify-center">
                    <button onClick={onnclick}>Escritorio</button>
                    <button id="product" onClick={onnclick}>Productos</button>
                    <button id="account" onClick={onnclick}>Cuenta</button>
                </div>
            </div>
        </>
    )
}

export default SectionProfile
