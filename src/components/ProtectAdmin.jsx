import React, { useEffect } from 'react'
import { getUsers } from '../peticiones'

function ProtectAdmin() {
    useEffect(()=>{
        getUsers().then(response => response.json()).then(data => console.log(data))
    })
  return (
    <div>ProtectAdmin</div>
  )
}

export default ProtectAdmin