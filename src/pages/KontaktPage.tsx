import MaxWithWrapper from "../components/MaxWithWrapper";
import ContactInfo from "../components/contactinfo/ContactInfo";
import MapEmbed from "../components/mapembed/MapEmbed";

const KontaktPage = () => {
    return (
        <MaxWithWrapper>
            <div className="w-full">
                <div className="flex justify-center mt-16">
                    <img src="/kontakt/kontakt.png" alt=""/>
                </div>
                <div className="flex flex-col justify-center text-center mt-16">
                    <p className="font-FONT_ROBOTO font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4">Kontakt</p>
                    <ContactInfo/>
                </div>
                <div className="flex justify-center mt-16">
                    <MapEmbed/>
                </div>
                </div>
        </MaxWithWrapper>
);
}

export default KontaktPage;
