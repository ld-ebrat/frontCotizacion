import { useEffect, useState } from "react";
import { getAllUsers } from "../peticiones";
import { Outlet, useNavigate } from "react-router-dom";

function GestionUser() {

    const [users, setUsers] = useState([])
    const [userSelect, setUserSelect] = useState()
    const navigat = useNavigate()

    useEffect(() => {
        getAllUsers().then(res => res.json()).then(data => setUsers(data))
    }, [])

    const handleUser = (event)=>{
        console.log(event.currentTarget.parentElement.children[0].children)

        // if(event.target.parentElement.tagName === "BUTTON"){
        //     navigat("/admin/Guser/create")
        // }
    }
    return (
        <>
            <Outlet/>
        </>
    );
}

export default GestionUser;