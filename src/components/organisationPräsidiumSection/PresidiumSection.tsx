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
           <div className=" flex flex-col items-center justify-center gap-4">
            <div>
                <img className=" w-44 h-44 rounded-full" src={image} alt="" />
            </div>
            <div className=" flex flex-col items-center    text-sm">
                <p>{position}</p>
                <p className="font-bold">{firstName} {LastName}</p>
                <p className="cursor-pointer underline">{email}</p>
            </div>
        </div>
     </div>
    );
}

export default PresidiumSection;