import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "nes.css/css/nes.min.css";

const MainLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

export default MainLayout;