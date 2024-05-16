

const ContactInfo = () => {
    return (
        <>
            <div >
                <p className="gap-8 mt-5 mb-5">Willkommen bei der AEH!</p>
                <h1 className="lg:text-4xl text-xl">
                    <span className="font-bold">Kontakt</span>
                </h1>
                <div className="font-bold text-md  mt-16">
                    <p>AEH–Generalsekretariat</p>
                    <p>Simon Öhe</p>
                    <p className="mt-3">
                        Markus-Sittikus-Straße 20 <br/>
                        AT 6845 Hohenems
                    </p>
                </div>

                <div className="text-md  mt-6">
                    <p>Mobil: +43 699 192 172 95</p>
                    <p className="underline cursor-pointer ">info@aeh-europe.de</p>
                </div>
            </div>

        </>
    );
}

export default ContactInfo;
