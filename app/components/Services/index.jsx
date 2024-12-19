'use client'

import { TbDental } from "react-icons/tb";

function ServiceCard({ title, description }) {
    return (
        <div className="bg-white w-[260px] h-[300px] flex flex-col items-center justify-center gap-4 rounded-xl text-black shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <div className="rounded-full bg-lightBlue p-4 shadow-inner">
                <TbDental size={40} color="white" />
            </div>
            <h1 className="text-2xl font-semibold text-center">
                {title}
            </h1>
            <p className="font-light text-base text-gray-600 text-center px-4">
                {description}
            </p>
        </div>
    );
}

export default function Services() {
    return (
        <section className="mx-6 md:mx-24 flex flex-col items-center py-10 gap-10">
            <h2 className="text-4xl font-semibold text-lightBlue transition-colors hover:text-blue-500 duration-300">
                Nuestros servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <ServiceCard 
                    title="Limpieza dental" 
                    description="Realizamos limpiezas dentales profundas para mantener tus dientes sanos." 
                />
                <ServiceCard 
                    title="Blanqueamiento" 
                    description="Tratamientos avanzados para blanquear y mejorar tu sonrisa." 
                />
                <ServiceCard 
                    title="Ortodoncia" 
                    description="Soluciones para alinear tus dientes con tecnología moderna." 
                />
                <ServiceCard 
                    title="Implantes dentales" 
                    description="Reemplazo de dientes con implantes duraderos y seguros." 
                />
            </div>
        </section>
    );
}
