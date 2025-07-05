import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <>
            {currentPath != "/products" && < Navbar />}
            <Outlet />
        </>
    )
};

export default Layout;