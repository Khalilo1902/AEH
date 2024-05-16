
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

        <div className="w-full">
            <div className="flex justify-center px-2">
                <img src="/mitglieder/Rectangle 3.png" alt=""/>
            </div>

            <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                <p className="gap-8 mt-5 mb-5">Willkommen bei der AEH!</p>
                <h1 className="lg:text-4xl text-xl">
                    <span className="font-bold">Mitgliedsorganisationen</span>
                    <p>der AEH</p>
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

export default MitgliederPage;
