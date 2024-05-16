
import ContactInfo from "../components/contactinfo/ContactInfo";
import MapEmbed from "../components/mapembed/MapEmbed";

const KontaktPage = () => {
    return (

            <div className="w-full">
                <div className="flex justify-center px-2">
                    <img src="/kontakt/kontakt.png" alt=""/>
                </div>
                <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">

                    <ContactInfo/>
                </div>
                <div className="flex justify-center items-center mt-16 mb-36">
                    <MapEmbed/>
                </div>
                </div>

);
}

export default KontaktPage;
