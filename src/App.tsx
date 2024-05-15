import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Logo from "./components/header/logo/Logo";
import Nav from "./components/header/nav/Nav";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import MaxWithWrapper from "./components/MaxWithWrapper";

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className=" w-full">
    
       
          <MaxWithWrapper>
            <div>
              <Nav
                isMenuActive={isMenuActive}
                setIsMenuActive={setIsMenuActive}
              />
            </div>
            <div className=" mt-10">
              <Logo />
            </div>
            <div className=" mt-10">
              <Menu />
            </div>
          

          <div>
            <Outlet />
          </div>
       

        
        </MaxWithWrapper>
        <div className=" w-full bg-LIGHT_BLUE  bottom-0 mt-10  ">
          <Footer />
        </div>
    </div>
  );
};

export default App;
