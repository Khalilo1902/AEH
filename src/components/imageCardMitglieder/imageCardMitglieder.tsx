import { FaMapLocationDot } from "react-icons/fa6";

interface ImageCardProps {
    src?:string
    title: string;
    standort: string;
}

const ImageCard = ({ title, standort }: ImageCardProps) => {
    return (
        <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="flex items-center justify-start absolute top-0 left-0 m-4">
                <FaMapLocationDot className="w-5 h-5 text-white cursor-pointer" />
                <p className="ml-2 text-lg italic text-black">{standort}</p>
            </div>
            <div className="h-96 w-72 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="text-3xl font-bold text-white">{title}</h1>
                    <button className="absolute bottom-4 left-1 right-1 mx-auto bg-transparent border border-neutral-900 rounded-full py-2 px-3.5 text-sm capitalize text-neutral-900 shadow shadow-black/60">Besuchen</button>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
