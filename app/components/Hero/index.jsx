import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative bg-gray-900 text-white h-[550px]">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/Hero.avif" // Asegúrate de colocar esta imagen en la carpeta "public"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-4xl font-bold sm:text-6xl text-lightBlue">
                    Del Carmen Odontología
                </h1>
                <p className="mt-4 text-2xl">
                    Descubre cómo una sonrisa perfecta puede mejorar <br/> tu confianza y calidad de vida.
                </p>
            </div>
        </div>
    );
}
