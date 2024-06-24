import { useTranslation } from "react-i18next";
const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-full">
            <div className="w-full flex flex-col justify-center">
                <div className="w-auto flex justify-start mt-8">
                    <h1 className="lg:text-4xl text-xl">
                        <span className="font-bold">{t('aboutUs.title')}</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-4 justify-center mt-5">
                    <div className="w-full flex justify-start">
                        <img src="/biQuoteUnten.png" alt="" className="w-10 h-10" />
                    </div>

                    <p className="relative text-justify leading-normal">
                        {t('aboutUs.description1')}
                    </p>
                    <p className="text-balance leading-normal">
                        {t('aboutUs.description2')}
                    </p>
                    <p className="text-justify leading-normal">
                        {t('aboutUs.description3')}
                    </p>
                    <div className="w-full flex justify-end">
                        <img src="/biqQoteOben.png" alt="" className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;