import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
    return (
        <div className="fixed right-4 bottom-4 z-10">
            <a href="https://api.whatsapp.com/send?phone=56998483693&text=Hola!%20Quiero%20agendar%20una%20hora." target="_blank">
                <div className="bg-green-500 rounded-full w-[60px] h-[60px] flex justify-center items-center hover:scale-110">

                    <FaWhatsapp size={40} />

                </div>
            </a>
        </div>
    )
}
