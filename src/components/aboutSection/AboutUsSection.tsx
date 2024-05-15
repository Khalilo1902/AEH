const AboutUsSection = () => {
    return (
        <div className="w-full flex ">
            <div className="w-full flex flex-col justify-center">
                <div className="w-auto flex justify-start mt-8">
                    <h1 className="lg:text-4xl text-xl">
                        <span className="font-bold">Wer</span> sind wir
                    </h1>
                </div>
                <div className="flex flex-col gap-4 justify-center mt-5 ">
                    <div className="w-full flex justify-start  ">
                        <img  src="/biQuoteUnten.png" alt="" className="w-10 h-10"/>
                    </div>

                    <p className="relative text-justify leading-normal">
                        Die AEH wurde 1979 gegründet, um Menschen mit Behinderungen zu 
                        unterstützen, wobei die Implementierung der UN- 
                        Behindertenrechtskonvention (UNBRK) ein zentrales Ziel darstellt.
                    </p>
                    <p className="text-balance leading-normal">
                        Als Mitbegründerin des Europäischen Behindertenforums (EDF) ist die AEH 
                         Teil einer bedeutenden Institution, die sich auf europäischer und 
                         internationaler Ebene für die Interessen von Menschen mit Behinderungen  
                        einsetzt.
                    </p>
                    <p className="text-justify leading-normal">
                        Aktuell konzentriert sich die AEH auf die Herausforderungen, die sich aus
                        der Alterung von Menschen mit Behinderungen ergeben, insbesondere im 
                         Hinblick auf die Verbesserung ihrer Wohnsituation.
                    </p>
                    <div className="w-full flex justify-end">
                        <img src="/biqQoteOben.png" alt="" className="w-12 h-12"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;