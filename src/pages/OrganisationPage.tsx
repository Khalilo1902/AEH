
import PresidiumSection from "../components/organisationPräsidiumSection/PresidiumSection";
import { useTranslation } from 'react-i18next';


export interface IRenderComponent {
    id: string;
    image: string;
    position: string;
    firstName: string;
    LastName: string;
    email: string;
    
  }

const OrganisationPage = () => {
    const { t } = useTranslation();

    const renderComponent: IRenderComponent[] = [
        {
            id: '1',
            image: "/organisation/präsident.png",
            position: 'organisationPage.positions.president',
            firstName: "Pierre",
            LastName: "Gyselinck",
            email: "Pierre.Gyselinck@aeh-europe.de"
        },
        {
            id: '2',
            image: "/organisation/vicePräsident.png",
            position: 'organisationPage.positions.vicePresidentFemale',
            firstName: "Lieke",
            LastName: "Zaeyen-Kuijken",
            email: ""
        },
        {
            id: '3',
            image: "/organisation/frauSchmitt.png",
            position: 'organisationPage.positions.vicePresidentFemale',
            firstName: "Marie-José",
            LastName: "Schmitt",
            email: ""
        },
        {
            id: '4',
            image: "/organisation/vicePräsident.png",
            position: 'organisationPage.positions.vicePresidentMale',
            firstName: "Franz",
            LastName: "Groschan",
            email: ""
        },
        {
            id: '5',
            image: "/organisation/frauMarion.png",
            position: 'organisationPage.positions.treasurer',
            firstName: "Marion",
            LastName: "Kamper",
            email: ""
        },
        {
            id: '6',
            image: "/organisation/frauVerena.png",
            position: 'organisationPage.positions.boardMemberFemale',
            firstName: "Verena",
            LastName: "Bentele",
            email: ""
        },
        {
            id: '7',
            image: "/organisation/vicePräsident.png",
            position: 'organisationPage.positions.boardMemberMale',
            firstName: "Taras",
            LastName: "Poljanec",
            email: ""
        },
        {
            id: '8',
            image: "/organisation/herrHerbert.png",
            position: 'organisationPage.positions.reviewer',
            firstName: "Herbert",
            LastName: "Hellmund",
            email: ""
        },
        {
            id: '9',
            image: "/organisation/frauBerndt.png",
            position: 'organisationPage.positions.reviewer',
            firstName: "Berndt",
            LastName: "Maier",
            email: ""
        },
        {
            id: '10',
            image: "/organisation/herrKurt.png",
            position: 'organisationPage.positions.secretaryGeneral',
            firstName: "Kurt",
            LastName: "Öhe",
            email: ""
        }
    ];

    return (
        <>
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex justify-center px-2">
                    <img className="w-full" src="/organisation/organisation1.png" alt="" />
                </div>
                <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                    <p className="gap-8 mt-5 mb-5">{t('organisationPage.welcome')}</p>
                    <h1 className="lg:text-4xl text-xl">
                        <span className="font-bold">{t('organisationPage.title')}</span>
                    </h1>
                </div>
                <div className="mt-5">
                    <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                        <h1 className="lg:text-4xl text-xl">
                            <span className="font-bold">{t('organisationPage.structureTitle')}</span>
                        </h1>
                        <p className="mt-7 text-justify leading-normal">
                            {t('organisationPage.structureDescription1')}
                        </p>
                        <p className="mt-4 text-justify leading-normal">
                            {t('organisationPage.structureDescription2')}
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="w-auto px-3 flex flex-col justify-start mt-8 mb-8">
                        <h1 className="lg:text-4xl text-xl">
                            <span className="font-bold">{t('organisationPage.presidiumTitle')}</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5">
                        {renderComponent.map((component, index) => (
                            <div key={index}>
                                <PresidiumSection
                                    {...component}
                                    position={t(component.position)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrganisationPage;