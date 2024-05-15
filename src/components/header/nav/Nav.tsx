import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ReactCountryFlag from "react-country-flag";

interface INavProps {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isMenuActive, setIsMenuActive }: INavProps) => {
  const [selectLanguage, setSelectLanguage] = useState({
    language: "Deutsch",
    countryCode: "DE"
  });

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const handleLanguageClick = (language: string, countryCode: string) => {
    setSelectLanguage({ language, countryCode });
    closeMenu();
    console.log(language);
  };

  return (
    <div className="my-4 mx-0.5 flex justify-between items-center w-full">
      <div className="relative flex gap-3 items-center">
        <FaFacebook className="w-8 h-8 text-PRIMARY_BLUE cursor-pointer" />
        <img
          src="/nav/X.png"
          alt=""
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        <img
          src="/nav/instegram.jpeg"
          alt=""
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        <FaYoutube className="w-8 h-8 rounded-full text-red-500 cursor-pointer" />
      </div>
      <div className="flex items-center justify-around gap-6">
        <div className="flex ">
          <div
            onClick={toggleMenu}
            className="flex  cursor-pointer text-sm sm:text-xl px-4 py-1  rounded-lg items-center gap-3"
          >
            {/* Display the selected language and flag */}
            <span className="flex gap-2 items-center font-bold">
              <ReactCountryFlag countryCode={selectLanguage.countryCode} />
              {selectLanguage.language}
            </span>
            {isMenuActive ? (
              <span onClick={closeMenu}><BiSolidDownArrow /></span>
            ) : (
              <span onClick={toggleMenu}><BiSolidUpArrow /></span>
            )}
          </div>
        </div>
        <p className=" text-sm sm:text-xl font-medium hidden md:flex">Impressum</p>
      </div>
      {isMenuActive && (
        <div className="absolute top-12 right-[444px] z-50 flex flex-col gap-4 rounded-lg bg-PRIMARY_WHITE py-6 px-4">
          <p
            onClick={() => handleLanguageClick("English", "US")}
            className="flex items-center gap-2 cursor-pointer border-b-2 hover:scale-110"
          >
            <span>
              <ReactCountryFlag countryCode="US" />
            </span>
            <span className="text-sm font-medium hover:scale-110">English</span>
          </p>
          <p
            onClick={() => handleLanguageClick("Francais", "FR")}
            className="flex items-center gap-2 cursor-pointer border-b-2 hover:scale-110"
          >
            <span>
              <ReactCountryFlag countryCode="FR" />
            </span>
            <span className="text-sm font-medium">Francais</span>
          </p>
          <p
            onClick={() => handleLanguageClick("Deutsch", "DE")}
            className="flex items-center gap-2 cursor-pointer border-b-2 hover:scale-110"
          >
            <span>
              <ReactCountryFlag countryCode="DE" />
            </span>
            <span className="text-sm font-medium">Deutsch</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Nav;
