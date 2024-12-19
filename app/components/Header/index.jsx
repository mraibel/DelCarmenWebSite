import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="flex flex-col h-[125px]">
            <div className="h-[50px] bg-black px-[150px] flex justify-between items-center">
                <div className="flex gap-5">
                    <FaPhoneAlt size={25} color="#03acb4"/>
                    <p>+56 9 1234 5678</p>
                    <MdEmail size={25} color="#03acb4"/>
                    <p>correo@correo.com</p>
                </div>
                <div className="flex gap-5">
                    <Link href={""}><FaSquareInstagram size={25}/></Link>
                    <Link href={""}><FaFacebook size={25}/></Link>
                    <Link href={""}><FaXTwitter size={25}/></Link>
                </div>
            </div>
            <div className="h-[75px] px-[150px] flex justify-between items-center">
                <h1 className="text-lightBlue font-bold">Del Carmen Odontología</h1>
                <div className="flex gap-10 text-lg text-yellow">
                    <Link href={""}>Inicio</Link>
                    <Link href={""}>Equipo Profesional</Link>
                    <Link href={""}>Contacto</Link>
                </div>
            </div>
        </header>
    )
}