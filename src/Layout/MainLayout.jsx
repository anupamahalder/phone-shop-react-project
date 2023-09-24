import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
            <div className="pt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;