import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="flex flex-col">
            {/* Barra superior */}
            <div className="h-auto bg-black px-4 md:px-10 lg:px-[150px] py-2 flex flex-col md:flex-row justify-between items-center gap-2">
                {/* Contacto */}
                <div className="flex gap-3 md:gap-5 items-center">
                    <FaPhoneAlt size={20} color="#03acb4" />
                    <p className="text-sm md:text-base text-white">+56 9 1234 5678</p>
                    <MdEmail size={20} color="#03acb4" />
                    <p className="text-sm md:text-base text-white">correo@correo.com</p>
                </div>
                {/* Redes sociales */}
                <div className="flex gap-3">
                    <a
                        href="https://www.facebook.com/delcarmen.odontologia"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Facebook"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.725c0-2.506 1.492-3.89 3.77-3.89 1.093 0 2.24.195 2.24.195v2.46h-1.262c-1.243 0-1.63.772-1.63 1.562v1.868h2.773l-.443 2.89h-2.33v6.987C18.344 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/delcarmen.odontologia/"
                        className="hover:text-pink-500 transition-colors"
                        aria-label="Instagram"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M7.75 2h8.5A5.753 5.753 0 0122 7.75v8.5A5.753 5.753 0 0116.25 22h-8.5A5.753 5.753 0 012 16.25v-8.5A5.753 5.753 0 017.75 2zm8.5 1.5h-8.5A4.253 4.253 0 003 7.75v8.5A4.253 4.253 0 007.75 20.5h8.5A4.253 4.253 0 0020.5 16.25v-8.5A4.253 4.253 0 0016.25 3.5zm-4.25 4.248a5.002 5.002 0 015 5 5.002 5.002 0 01-5 5 5.002 5.002 0 01-5-5 5.002 5.002 0 015-5zm0 1.5a3.5 3.5 0 00-3.5 3.5 3.5 3.5 0 007 0 3.5 3.5 0 00-3.5-3.5zm4.748-3.623a1 1 0 111-1 1 1 0 01-1 1z" />
                        </svg>
                    </a>
                </div>
            </div>

        </header>
    );
}
