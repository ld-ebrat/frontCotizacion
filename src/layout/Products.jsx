import { Outlet, useParams } from "react-router-dom";

function Products() {
    const { categoria } = useParams()
    return (
        <>
            <div className="w-full flex flex-col items-center gap-5 relative">
                <Outlet />
            </div>
        </>
    );
}

export default Products;