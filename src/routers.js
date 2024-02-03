import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import SingUp from "./pages/singup";
import perfilUserClient from "./pages/perfilUserClient";
import Admin from "./pages/admin";
import GestionUser from "./layout/GestionUser";
import GestionAdmin from "./layout/GestionAdmin";
import PerfilUser from "./pages/PerfilUser";
import Desktop from "./layout/Desktop";
import Products from "./layout/Products";
import SingupPrin from "./layout/SingupPrin";
import SingupData from "./layout/SingupData";
import Profile from "./pages/Profile";
import ProductCU from "./layout/ProductCU";
import Product from "./components/Product";
import ProtectRouterDesktop from "./components/ProtectRouterDesktop";
import ProtectRouterProfile from "./components/ProtectRouterProfile";

const router = createBrowserRouter([
    {
        path: "/",
        Component:Home,
    },
    {
        path: "/profileClient",
        Component: perfilUserClient,
    },
    {
        path: "/profile/:user",
        Component: ProtectRouterProfile,
        children: [
            {
                path: "/profile/:user/desktop",
                Component: ProtectRouterDesktop
            },
            {
                path: "/profile/:user/product",
                Component: Products,
                children: [
                    {
                        path: "/profile/:user/product",
                        Component: Product
                    },
                    {
                        path: "/profile/:user/product/add",
                        Component: ProductCU
                    }
                ]
            },
        ]
    },
    {
        path: "/perfilUser",
        Component: PerfilUser,
        children: [
            {
                path: "/perfilUser",
                Component: Desktop,
            },
            {
                path: "/perfilUser/category/:categoria",
                Component: Products,
            },
            {
                path: "/perfilUser/addproduct",
                Component: ProductCU
            }
        ]
    },
    {
        path: "/login",
        Component:Login
    },
    {
        path: "/singup",
        Component: SingUp,
        children: [
            {
                path: "/singup",
                Component: SingupPrin
            },
            {
                path: "/singup/data",
                Component: SingupData
            }
        ]
    },
    {
        path: "/admin",
        Component: Admin,
        children: [
            {
                path: "/admin/Guser",
                Component: GestionUser,
            },
            {
                path: "/admin/Gadmin",
                Component: GestionAdmin
            }
        ]
    }
])

export default router;