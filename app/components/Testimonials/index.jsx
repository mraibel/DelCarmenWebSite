'use client';

import Image from "next/image";
import TestimonialCard from "./TestimonalCard";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const testimonials = [
    { name: "Juan Pérez", feedback: "La atención fue excelente, los profesionales son muy dedicados.", rating: 5 },
    { name: "María González", feedback: "Me sentí muy cómoda durante todo el tratamiento. ¡Los recomiendo!", rating: 4 },
    { name: "Carlos Ramírez", feedback: "Los implantes dentales son de gran calidad. Estoy muy contento con el resultado.", rating: 5 },
    { name: "Ana López", feedback: "El blanqueamiento superó mis expectativas, ¡gracias al equipo!", rating: 5 },
    { name: "Sofía Martínez", feedback: "El servicio fue rápido y profesional. Todo el equipo es muy amable.", rating: 4 },
];

export default function Testimonials() {
    const [visibleCount, setVisibleCount] = useState(3); // Número de testimonios visibles
    const [indices, setIndices] = useState([0, 1, 2]); // Índices visibles

    // Ajustar la cantidad de testimonios visibles según el tamaño de la pantalla
    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1); // Pantallas pequeñas
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2); // Pantallas medianas
            } else {
                setVisibleCount(3); // Pantallas grandes
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    // Actualizar índices al cambiar la cantidad visible
    useEffect(() => {
        setIndices((prev) => prev.slice(0, visibleCount));
    }, [visibleCount]);

    const handleNext = () => {
        setIndices((prevIndices) =>
            prevIndices.map((index) => (index + 1) % testimonials.length)
        );
    };

    const handlePrevious = () => {
        setIndices((prevIndices) =>
            prevIndices.map((index) =>
                (index - 1 + testimonials.length) % testimonials.length
            )
        );
    };

    return (
        <section className="bg-gray-50">
            <div className="mx-5 lg:mx-20 py-5">
                <div id="container" className="h-auto flex flex-col lg:flex-row items-center gap-5 p-2">
                    {/* Doctor Info */}
                    <div
                        id="doctor"
                        className="bg-gray-600 w-full lg:w-[600px] rounded-l-3xl rounded-r-[40px] flex flex-col justify-center items-center gap-5 pr-3 relative z-10 p-5"
                    >
                        <h3 className="text-lightBlue text-2xl lg:text-4xl font-semibold text-center">
                            ¿Qué dicen nuestros pacientes?
                        </h3>
                        <Image src="/doc.webp" width={150} height={300} alt="Doctor" />
                    </div>

                    {/* Testimonios */}
                    <div
                        id="testimonials"
                        className="w-full flex flex-col items-center justify-center z-10 relative -translate-x-0 lg:-translate-x-14"
                    >
                        <div className="flex flex-wrap justify-center gap-4">
                            {indices.map((index) => (
                                <TestimonialCard
                                    key={index}
                                    user={testimonials[index].name}
                                    rating={testimonials[index].rating}
                                    feedback={testimonials[index].feedback}
                                />
                            ))}
                        </div>

                        {/* Botones de Control */}
                        <div className="flex justify-center mt-5 gap-4">
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                onClick={handlePrevious}
                            >
                                <FaArrowAltCircleLeft />
                            </button>
                            <button
                                className="bg-lightBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                onClick={handleNext}
                            >
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
