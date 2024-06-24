import {  BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motin";
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="mx-auto w-full my-auto max-w-screen-2l px-4 sm:px-0">
            <div className="container flex h-full w-full items-center justify-around md:px-28">
                <motion.div
                    variants={fadeIn("left", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "100px" }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="w-full text-start font-FONT_VIGA text-xl">
                            {t("footer.menu")}
                        </h1>
                        <ul className="text-xs font-medium">
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.welcome")}
                            </li>
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.organisation")}
                            </li>
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.members")}
                            </li>
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.contact")}
                            </li>
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.privacyPolicy")}
                            </li>
                            <li className="flex gap-2 items-center cursor-pointer hover:underline">
                <span>
                  <BiSolidRightArrow className="" />
                </span>
                                {t("footer.imprint")}
                            </li>
                            <li className="font-bold font-FONT_ROBOTO text-sm mt-2">
                                {t("footer.copyright")}
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <div style={{ width: "150px" }}></div>
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "100px" }}
                >
                    <div className="flex items-center justify-center flex-col gap-2">
                        <div className="flex w-full items-center gap-2">
                            <p>
                                <img
                                    src="/footer/youtube.png"
                                    alt="youtube"
                                    className="w-5 h-5 lg:w-7 lg:h-7 rounded-full text-LIGHT_BLUE cursor-pointer"
                                />
                            </p>
                            <p>
                                <img
                                    src="/footer/facebook.png"
                                    className="w-5 h-5 lg:w-7 lg:h-7 cursor-pointer"
                                />
                            </p>
                            <p>
                                <img
                                    src="/footer/linkedin.png"
                                    className="w-5 h-5 md:w-7 md:h-7 rounded-full cursor-pointer"
                                    alt=""
                                />
                            </p>
                            <p>
                                <img
                                    src="/footer/twitter.png"
                                    className="w-5 h-5 md:w-7 md:h-7 rounded-full cursor-pointer"
                                    alt=""
                                />
                            </p>
                            <p>
                                <img
                                    src="/footer/instegram.png"
                                    className="w-5 h-5 md:w-7 md:h-7 rounded-full cursor-pointer"
                                    alt=""
                                />
                            </p>
                            <p>
                                <img
                                    src="/footer/tiktok.png"
                                    className="w-5 h-5 lg:w-7 lg:h-7"
                                />
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <img
                                    className="w-20 h-30 cursor-pointer"
                                    src="/footer/image4.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="flex flex-col">
                  <span className="font-bold text-sm sm:text-xl">
                    {t("footer.interested")}
                  </span>
                                    <span className="text-sm">
                    {t("footer.contactPrompt")}
                  </span>
                                </p>
                                <div className="w-full text-end">
                                    <button className="mt-4 bg-SECONDARY_WHITE px-4 sm:px-8 py-1 rounded-full font-bold hover:bg-Light_BLUE border-2 hover:scale-110 text-sm">
                                        {t("footer.contactButton")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;