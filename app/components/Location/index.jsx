import { FaBus, FaCar, FaTaxi } from "react-icons/fa";

export default function Location() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-lightBlue text-center mb-10">
                    Nuestra Ubicación
                </h2>
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.5731991573726!2d-72.10018664866995!3d-36.61933820684197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96692832027757a5%3A0xa5ee318cd0074d26!2sUno%20Sur%20219%2C%203780000%20Chill%C3%A1n%2C%20%C3%91uble!5e0!3m2!1ses-419!2scl!4v1734620490369!5m2!1ses-419!2scl"
                        className="w-full h-[300px] md:h-[400px]"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de nuestra ubicación"
                    ></iframe>
                </div>
                <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
                    Visítanos en <span className="font-semibold">Uno Sur 219, Av. Chile, Chillán</span>.
                </p>
                <div id="llegar" className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center">
                            <FaBus className="text-lightBlue mb-3" size={50} />
                            <p className="text-gray-700 font-medium">Microbuses</p>
                            <p className="text-gray-500 text-sm">Línea 2 - Línea 11</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaCar className="text-lightBlue mb-3" size={50} />
                            <p className="text-gray-700 font-medium">Colectivos</p>
                            <p className="text-gray-500 text-sm">
                                Línea 13 - Línea 17 - Línea 21 - Línea 29
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaTaxi className="text-lightBlue mb-3" size={50} />
                            <p className="text-gray-700 font-medium">Uber/Didi/Cabify</p>
                            <p className="text-gray-500 text-sm">Uno Sur 219 (Av. Chile)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
