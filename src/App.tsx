import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Logo from "./components/header/logo/Logo";
import Nav from "./components/header/nav/Nav";

import Menu from "./components/menu/Menu";

import MaxWithWrapper from "./components/MaxWithWrapper";
import './App.css';
import './i18nConfig';


const App = () => {

    return (
        <div className=" w-full">


            <MaxWithWrapper>
                <div>
                    <Nav/>


                </div>
                <div className=" mt-10">
                    <Logo/>
                </div>
                <div className=" mt-10">
                    <Menu/>
                </div>


                <div>
                    <Outlet/>
                </div>


            </MaxWithWrapper>
            <div className=" w-full bg-LIGHT_BLUE  bottom-0 mt-10  ">
                <Footer/>
            </div>
        </div>
    );
};

export default App;
