import MaxWithWrapper from "../components/MaxWithWrapper";
import ImageCard from "../components/imageCardMitglieder/imageCardMitglieder";

const MitgliederPage = () => {
    const images = [
        {
            title: "Association des Parents d'Enfants Mentalement Handicapés (APEMH) ",
            standort:"Esch/Alzette, Luxemburg",
        },
        {
            title: "Association La Bourguette",
            standort: "Pertuis, Frankreich",
        },
        {
            title: "Bundesverband der Kehlkopfoperierten e. V. (BVK)",
            standort: "Bonn, Deutschland",
        },
        {
            title: "Büro für Berufsintegrations-projekte",
            standort: "Hohenems, Österreich",
        },
        {
            title: "dafür Unternehmens- und Personalberatung GmbH",
            standort: "Hohenems, Österreich",
        },
        {
            title: "Katholieke Vereniging Gehandicapten (KVG)",
            standort: "Antwerpen, Belgien",
        },
        {
            title: "SONČEK",
            standort: "Antwerpen, Belgien",
        },
        {
            title: "Kriegsopfer und Behindertenverband Österreich (KOBV-Ö)",
            standort: "Wien, Österreich",
        },
        {
            title: "Sozialverband VdK Deutschland e.V.",
            standort: "Berlin, Deutschland",
        },
    ];

    return (
        <MaxWithWrapper>
            <div className="w-full">
                <div className="flex justify-center mt-16">
                    <img src="/mitglieder/Rectangle 3.png" alt=""/>
                </div>
                <div className="flex flex-col justify-center text-center mt-16">
                    <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Willkommen bei der AEH!</p>
                    <p className="font-FONT_ROBOTO font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4">Mitgliedsorganisation</p>
                    <p className="font-FONT_ROBOTO text-3xl md:text-4xl lg:text-5xl xl:text-6xl">der AEH</p>
                </div>
                <div className="flex items-center justify-center bg-neutral-800 mt-8">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {images.map((image, index) => (
                            <ImageCard key={index} {...image} />
                        ))}
                    </div>
                </div>
            </div>
        </MaxWithWrapper>
    );
};

export default MitgliederPage;
