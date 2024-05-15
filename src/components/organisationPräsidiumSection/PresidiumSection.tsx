import { IRenderComponent } from "../../pages/OrganisationPage";



const PresidiumSection = ({
    image, 
    position,
    firstName,
    LastName,
    email    
  
}:IRenderComponent) => {
    
    return (
     <div className=" w-full">
           <div className=" flex flex-col items-center justify-center gap-1">
            <div>
                <img className=" w-48 h-48 rounded-full" src={image} alt="" />
            </div>
            <div className=" flex flex-col items-center gap-2 font-FONT_ROBOTO font-bold text-sm">
                <p>{position}</p>
                <p>{firstName} {LastName}</p>
                <p>{email}</p>
            </div>
        </div>
     </div>
    );
}

export default PresidiumSection;