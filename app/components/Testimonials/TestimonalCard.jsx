import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function TestimonialCard({ user, feedback, rating }) {
    return (
        <Card className="min-w-[290px] max-w-[290px] h-[300px] m-2 p-2 bg-gray-100 shadow-lg">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://nextui.org/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-lg font-semibold leading-none text-default-600">{user}</h4>
                        <h5 className="text-base tracking-tight text-default-400">
                            {'★'.repeat(rating)}
                            {'☆'.repeat(5 - rating)}
                        </h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3">
                <FaQuoteLeft size={20} color="lightBlue"/>
                <p className="text-black text-base py-3">
                    {feedback}
                </p>
                <FaQuoteRight size={20} color="lightBlue" className="absolute right-0 bottom-0"/>
            </CardBody>
        </Card>
    );
}