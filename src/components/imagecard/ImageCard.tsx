interface ImageCardProps {
    src: string;
    title: string;
    description: string;
}

const ImageCard = ({ src, title, description }: ImageCardProps)=> {
    return (
        <div className="group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72 md:h-96 md:w-[600px] md:rounded-lg lg:h-96 lg:w-72 " >{/* className="" */}
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg sm:rounded-none" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">Besuchen</button>
            </div>
        </div>
    );
};

export default ImageCard;