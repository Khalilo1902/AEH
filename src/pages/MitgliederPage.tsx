import ImageCard from "../components/imageCardMitglieder/imageCardMitglieder";
import { useTranslation } from 'react-i18next';
const MitgliederPage= () => {
    const { t } = useTranslation();

    const images = t('mitgliederPage.images', { returnObjects: true }) as Array<{ title: string; standort: string }>;

    return (
        <div className="w-full">
            <div className="w-full flex justify-center px-2">
                <img className="w-full" src="/mitglieder/Rectangle 3.png" alt="" />
            </div>

            <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                <p className="gap-8 mt-5 mb-5">{t('mitgliederPage.welcome')}</p>
                <h1 className="lg:text-4xl text-xl">
                    <span className="font-bold">{t('mitgliederPage.title')}</span>
                    <p>{t('mitgliederPage.subtitle')}</p>
                </h1>
            </div>

            <div className="flex items-center justify-center bg-neutral-800 mt-28">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <ImageCard key={index} {...image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MitgliederPage