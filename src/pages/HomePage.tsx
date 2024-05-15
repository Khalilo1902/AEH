import MaxWithWrapper from "../components/MaxWithWrapper";
import AboutUsSection from "../components/aboutSection/AboutUsSection";
import Carousel from "../components/carousel/Carousel";
import ImageCard from "../components/imagecard/ImageCard";


const HomePage = () => {
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
      title: "Europarat ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      src: "/unsereAktionHome/image2.jpg",
      title: "EDF",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      src: "/unsereAktionHome/image3.jpg",
      title: "UNSER AKTION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
  ];
  return (
      <div >
          <div className=" w-full px-2 sm:px-0 ">
              <Carousel slides={slides}/>
          </div>
          <div className=" w-full  ">
              <div className=" w-full mx-3 ">

                  <AboutUsSection/>

              </div>
          </div>
          <div className="w-auto flex justify-start mt-8 mb-8">
              <h1 className="lg:text-4xl text-xl">
                  <span className="font-bold">Unser</span> Aktion
              </h1>
          </div>

          <div className="flex w-full  items-center justify-center bg-neutral-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    {images.map((image, index) => (
                        <div key={index} className="max-w-xs">
                            <ImageCard {...image} />
                        </div>
                    ))}
                </div>
          </div>
      </div>
  );
};

export default HomePage;
