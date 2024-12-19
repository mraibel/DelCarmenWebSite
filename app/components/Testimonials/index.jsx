'use client';

import Image from "next/image";
import TestimonialCard from "./TestimonalCard";

const testimonials = [
    {
        name: "Juan Pérez",
        feedback: "La atención fue excelente, los profesionales son muy dedicados.",
        rating: 5,
    },
    {
        name: "María González",
        feedback: "Me sentí muy cómoda durante todo el tratamiento. ¡Los recomiendo!",
        rating: 4,
    },
    {
        name: "Carlos Ramírez",
        feedback: "Los implantes dentales son de gran calidad. Estoy muy contento con el resultado.",
        rating: 5,
    },
    {
        name: "Ana López",
        feedback: "El blanqueamiento superó mis expectativas, ¡gracias al equipo!",
        rating: 5,
    },
    {
        name: "Sofía Martínez",
        feedback: "El servicio fue rápido y profesional. Todo el equipo es muy amable.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="mx-44 py-5">
            <div id="container" className="h-[400px] flex items-center gap-5 p-2">
                <div id="doctor" className="bg-gray-600 h-[400px] w-[600px] rounded-l-3xl rounded-r-[40px] flex flex-col justify-center items-center gap-5 pr-3 relative z-10">
                    <h3 className="text-lightBlue text-4xl font-semibold text-center">
                        ¿Qué dicen nuestros pacientes?
                    </h3>
                    <Image
                        src="/doc.webp"
                        width={150}
                        height={300}
                        alt="Doctor"
                    />
                </div>
                <div
                    id="testimonials"
                    className="w-full h-[400px] flex items-center overflow-auto z-10 relative -translate-x-14"
                >
                    {testimonials.map((e, index) => (
                        <TestimonialCard
                            key={index}
                            user={e.name}
                            rating={e.rating}
                            feedback={e.feedback}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
