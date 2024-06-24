import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import {DE, FR, GB} from "country-flag-icons/react/1x1";
import {twMerge} from "tw-merge";

const TranslationSwitcher = () => {

    const { t, i18n } = useTranslation('site');
    const changeLanguageHandler = (language: string) => {
        i18n.changeLanguage(language).then();
    };

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({ flag: <GB className="w-6 rounded-full" />, code: "en", name: "English" });
    const languageList = [
        { flag: <DE className="w-6 rounded-full" />, code: "de", name: "German" },
        { flag: <GB className="w-6 rounded-full" />, code: "en", name: "English" },
        { flag: <FR className="w-6 rounded-full" />, code: "fr", name: "French" }
    ];

    useEffect(() => {
        const foundLanguage = languageList.find((language) => language.code === i18n.language);
        if (foundLanguage && foundLanguage.code !== selected.code) {
            setSelected(foundLanguage);
        }
    }, [i18n.language, languageList, selected.code]);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                btnRef.current &&
                !btnRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative w-40 shrink-0">
            <button
                ref={btnRef}
                onClick={() => setOpen(!open)}
                className={twMerge(`flex gap-x-2 text-left focus:outline-none w-full relative py-2 px-4 cursor-pointer text-gray-500 bg-white rounded-md border border-blueGray-200 ${open ? 'rounded-b-none' : ''}`)}
            >
                {selected.flag}
                {selected.name}
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="absolute top-1/2 h-5 -translate-y-1/2 transform right-4" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="absolute top-1/2 h-5 -translate-y-1/2 transform right-4" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                )}
            </button>

            {open && (
                <div
                    ref={dropdownRef}
                    className="-mt-px border border-blueGray-200 z-20 w-full bg-PRIMARY_WHITE absolute max-h-300-px overflow-x-auto rounded-b-md shadow-lg scrollable-div"
                >
                    {languageList.map((language, index) => (
                        <button
                            key={index}
                            className={twMerge(
                                "flex gap-x-2 focus:outline-none w-full text-left text-gray-600 cursor-pointer py-2 px-4 hover:font-semibold hover:text-gray-900 hover:bg-gray-100",
                                selected.code === language.code &&
                                "hover:font-semibold hover:text-gray-900 hover:bg-gray-100 font-semibold text-gray-900 bg-gray-100"
                            )}
                            onClick={() => {
                                setOpen(false);
                                setSelected(language);
                                changeLanguageHandler(language.code);
                            }}
                        >
                            {language.flag}
                            {t(language.name)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TranslationSwitcher;