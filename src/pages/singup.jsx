import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContex";
import { useReducer } from "react";
import { UserReducer } from "../reducer/UserReducer";

function SingUp() {
    const [state, dispatch] = useReducer(UserReducer, {user: {}})
    return (
        <>
            <UserContext.Provider value={{state, dispatch}}>
                <main className="bg-ebrat-335 w-full h-screen flex justify-center items-center font-bold relative overflow-hidden">
                    <Outlet/>
                </main>
            </UserContext.Provider>
        </>
    )
}

export default SingUp;