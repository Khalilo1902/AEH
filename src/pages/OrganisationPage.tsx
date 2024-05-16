
import PresidiumSection from "../components/organisationPräsidiumSection/PresidiumSection";



export interface IRenderComponent {
    id: string;
    image: string;
    position: string;
    firstName: string;
    LastName: string;
    email: string;
    
  }

const OrganisationPage = () => {
    const renderComponent: IRenderComponent[] = [
        {
          id: '1',
          image: "/organisation/präsident.png",
          position: 'Präsident',
          firstName: "Pierre",
          LastName: "Gyselinck",
          email: "Pierre.Gyselinck@aeh-europe.de"
         
        },
        {
          id: '2',
          image: "/organisation/vicePräsident.png",
          position: 'Vizepräsidentin',
          firstName: "Lieke",
          LastName: "Zaeyen-Kuijken",
          email: ""
        },
        {
          id: '3',
          image: "/organisation/frauSchmitt.png",
          position: 'Vizepräsidentin',
          firstName: "Marie-José",
          LastName: " Schmitt",
          email: ""
        },
        {
          id: '4',
          image: "/organisation/vicePräsident.png",
          position: 'Vizepräsident',
          firstName: "Franz ",
          LastName: "Groschan",
          email: ""
        },
        {
          id: '5',
          image: "/organisation/frauMarion.png",
          position: 'Schatzmeisterin',
          firstName: "Marion ",
          LastName: "Kamper",
          email: ""
        },
        {
          id: '6',
          image: "/organisation/frauVerena.png",
          position: 'Beisitzerin',
          firstName: "Verena",
          LastName: "Bentele",
          email: ""
        },
        {
            id: '7',
            image: "/organisation/vicePräsident.png",
            position: 'Beisitzer',
            firstName: "Taras ",
            LastName: "Poljanec",
            email: ""
          },
          {
            id: '8',
            image: "/organisation/herrHerbert.png",
            position: 'Revisor',
            firstName: "Herbert  ",
            LastName: "Hellmund",
            email: ""
          },
          {
            id: '9',
            image: "/organisation/frauBerndt.png",
            position: 'Revisor',
            firstName: "Berndt   ",
            LastName: "Maier",
            email: ""
          },
          {
            id: '10',
            image: "/organisation/herrKurt.png",
            position: 'Generalsekretär',
            firstName: "Kurt   ",
            LastName: "Öhe",
            email: ""
          },
          
      ] 
  return (
    <>
        <div className=" w-full flex flex-col justify-center">
            <div className=" w-full flex justify-center px-2 ">
                <img className="w-full" src="/organisation/organisation1.png" alt=""/>
            </div>
            <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                <p className="gap-8 mt-5 mb-5">Willkommen bei der AEH!</p>
                <h1 className="lg:text-4xl text-xl">
                    <span className="font-bold">Organisation</span>

                </h1>

            </div>
            <div className=" mt-5">
                <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                    <h1 className="lg:text-4xl text-xl">
                        <span className="font-bold">Aufbau </span> der AEH
                    </h1>


                    <p className=" mt-7  text-justify leading-normal">
                        Die AEH ist ein Zusammenschluss von Organisationen, die als
                        Interessenvertretung von und für Menschen mit Behinderungen aktiv
                        sind. Alle in der AEH zusammengeschlossenen Organisationen haben
                        ihren Sitz in einem der europäischen Staaten.
                    </p>
                    <p className="mt-4  text-justify leading-normal">
                        Die AEH ist parteipolitisch und konfessionell neutral. Die
                        Geschäfte werden von einem ehrenamtlich tätigen Präsidium geführt,
                        das aus einem/einer Präsident:in, drei Vizepräsident:innen,
                        einer/einem Schatzmeister:in und Beisitzer:innen besteht.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                    <h1 className="lg:text-4xl text-xl">
                        <span className="font-bold">Präsidium </span> der AEH
                    </h1>
                </div>
                <div
                    className=" flex flex-wrap justify-center gap-5 mt-5"
                >
                    {
                        renderComponent.map((Component, index) => (
                            <div
                                className=" "
                                key={index}>
                                <PresidiumSection {...Component}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  );
};

export default OrganisationPage;
