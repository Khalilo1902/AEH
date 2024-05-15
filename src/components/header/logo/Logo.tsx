import AEHLogo from "../../../assets/AEHLogo.png";

const Logo = () => {
  return (
    <div className=" px-5 mt-2 relative container flex items-center justify-center  w-full">
      <div className=" w-full flex justify-center h-auto ">
        <img className="mx-auto w-full sm:px-20 rounded-lg sm:rounded-none" src={AEHLogo} alt="AEH Logo" />
      </div>
      <div
        className=" flex flex-col items-end lg:px-48  gap-1 absolute bottom-0 lg:right-64 xl:right-0 md:right-48  right-0 m-4 text-xs sm:text-xs lg:text-sm "
      >
        <p className="text-xs sm:text-sm font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">Action Européenne des Handicapés</p>
        <p className="text-xs sm:text-sm font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">European Action of Persons with Disabilities</p>
        <p className="text-xs sm:text-sm font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">Europäische Behindertenaktion</p>
      </div>
    </div>
  );
};

export default Logo;
