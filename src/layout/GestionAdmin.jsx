import { useEffect, useState } from "react";
import { getAllUsers, postUser } from "../peticiones";
import { useForm } from "react-hook-form";

function GestionAdmin() {

    const [users, setUsers] = useState([])
    const [userSelect, setUserSelect] = useState()

    useEffect(() => {
        getAllUsers("ADMIN").then(res => res.json()).then(data => setUsers(data))
    }, [])

    return (
        <>
        </>
    );
}

// const {
//     register,
//     handleSubmit,
//     formState: {
//         isValid
//     }
// } = useForm({
//     defaultValues: {
//         name: "",
//         email: "",
//         role: "",
//         pass: ""
//     }
// })
export default GestionAdmin;