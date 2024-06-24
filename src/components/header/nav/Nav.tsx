import {FaFacebook, FaYoutube} from "react-icons/fa";
import TranslationSwitcher from "./TranslationSwitcher.tsx";


function Nav() {


    return (
        <div className="my-4 mx-0.5 flex justify-between items-center w-full md:px-2">
            <div className="relative flex gap-3 items-center">
                <FaFacebook className="md:w-8 md:h-8 h-6 w-6 text-PRIMARY_BLUE cursor-pointer"/>
                <img
                    src="/nav/X.png"
                    alt=""
                    className="h-6 w-6 md:w-8 md:h-8 rounded-full cursor-pointer"
                />
                <img
                    src="/nav/instegram.jpeg"
                    alt=""
                    className="h-6 w-6 md:w-8 md:h-8 rounded-full cursor-pointer"
                />
                <FaYoutube className="h-6 w-6 md:w-8 md:h-8 rounded-full text-red-500 cursor-pointer"/>
            </div>
            <TranslationSwitcher />
        </div>

    )
}

export default Nav
