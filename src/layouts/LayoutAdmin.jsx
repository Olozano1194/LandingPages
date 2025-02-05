import { Outlet } from "react-router-dom";

import Header from "../components/Header";


const LayoutAdmin = () => {
    return (
        <div className="container">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};
export default LayoutAdmin;