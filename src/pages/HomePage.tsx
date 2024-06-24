
import AboutUsSection from "../components/aboutSection/AboutUsSection";
import Carousel from "../components/carousel/Carousel";
import ImageCard from "../components/imagecard/ImageCard";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    const slides: string[] = [
      "/caroussel/Slide1.png",
      "/caroussel/Slide2.png",
      "/caroussel/Slide3.png",
      "/caroussel/Slide4.png",
      "/caroussel/Slide5.png",

  ];

    const images = [
        {
            src: "/unsereAktionHome/image1.jpg",
            title: t("homePage.image1.title"),
            description: t("homePage.image1.description"),
        },
        {
            src: "/unsereAktionHome/image2.jpg",
            title: t("homePage.image2.title"),
            description: t("homePage.image2.description"),
        },
        {
            src: "/unsereAktionHome/image3.jpg",
            title: t("homePage.image3.title"),
            description: t("homePage.image3.description"),
        },
    ];

    return (
        <div>
            <div className="w-full px-2">
                <Carousel slides={slides} />
            </div>
            <div className="w-full">
                <div className="max-w-full mx-3">
                    <AboutUsSection />
                </div>
            </div>
            <div className="w-auto px-3 flex justify-start mt-8 mb-8">
                <h1 className="lg:text-4xl text-xl">
                    <span className="font-bold">{t("homePage.ourAction")}</span>
                </h1>
            </div>

            <div className="flex w-full items-center justify-center bg-neutral-800">
                <div className="grid grid-cols-1 md:px-3 md:rounded-lg gap-5 md:grid-cols-1 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div key={index} className="">
                            <ImageCard {...image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;