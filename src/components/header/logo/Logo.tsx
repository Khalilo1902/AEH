import AEHLogo from "../../../assets/AEHLogo.png";

const Logo = () => {
  return (
    <div className=" lg:px-5 px-2 mt-2 relative container flex items-center justify-center  w-full">
      <div className=" lg:w-full w-5/6 flex justify-center h-auto ">
        <img className="mx-auto w-full lg:px-20 rounded-lg sm:rounded-none" src={AEHLogo} alt="AEH Logo" />
      </div>
      <div
        className=" flex flex-col items-end lg:px-48  gap-1 absolute bottom-0 lg:right-64 xl:right-0 md:right-48 sm:right-36  right-14 m-4 text-[8px] lg:text-sm "
      >
        <p className=" sm:text-[12px] font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">Action Européenne des Handicapés</p>
        <p className=" sm:text-[12px] font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">European Action of Persons with Disabilities</p>
        <p className=" sm:text-[12px] font-medium text-PRIMARY_BLUE_ONE cursor-pointer hover:underline">Europäische Behindertenaktion</p>
      </div>
    </div>
  );
};

export default Logo;
