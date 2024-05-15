import MaxWithWrapper from "../components/MaxWithWrapper";
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
        <div className=" w-full flex justify-center ">
          <img className="w-full" src="/organisation/organisation1.png" alt="" />
        </div>
        <div className=" flex flex-col gap-8 mt-5">
          <p>Willkommen bei der AEH!</p>
          <p className=" font-FONT_ROBOTO font-bold text-3xl">
            Organisation
          </p>
        </div>
        <div className=" mt-5">
          <h1 className="text-3xl  flex gap-2">
            <span className=" font-FONT_ROBOTO font-bold"> Aufbau</span>
            <span>der AEH</span>
          </h1>
          <div className=" flex flex-col gap-4">
            <p className=" text-pretty mt-5">
              Die AEH ist ein Zusammenschluss von Organisationen, die als
              Interessenvertretung von und für Menschen mit Behinderungen aktiv
              sind. Alle in der AEH zusammengeschlossenen Organisationen haben
              ihren Sitz in einem der europäischen Staaten.
            </p>
            <p className=" text-pretty">
              Die AEH ist parteipolitisch und konfessionell neutral. Die
              Geschäfte werden von einem ehrenamtlich tätigen Präsidium geführt,
              das aus einem/einer Präsident:in, drei Vizepräsident:innen,
              einer/einem Schatzmeister:in und Beisitzer:innen besteht.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className=" text-3xl flex gap-2">
            <span className="font-bold font-FONT_ROBOTO">Präsidium </span>
            <span>der AEH</span>
          </h1>
          <div
          className=" flex flex-wrap justify-center gap-5 mt-5"
          >
{
    renderComponent.map((Component,index)=>(
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
