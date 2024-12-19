import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function TestimonialCard({ user, feedback, rating }) {
    return (
        <Card className="min-w-[260px] sm:min-w-[290px] max-w-[290px] h-auto sm:h-[300px] m-2 p-4 bg-gray-100 shadow-lg">
            <CardHeader className="justify-between">
                <div className="flex gap-3 sm:gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://nextui.org/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-lg font-semibold leading-none text-default-600">
                            {user}
                        </h4>
                        <h5 className="text-sm tracking-tight text-default-400">
                            {'★'.repeat(rating)}
                            {'☆'.repeat(5 - rating)}
                        </h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3">
                <FaQuoteLeft size={20} color="lightBlue" />
                <p className="text-black text-sm sm:text-base py-3">{feedback}</p>
                <FaQuoteRight
                    size={20}
                    color="lightBlue"
                    className="absolute right-2 bottom-2"
                />
            </CardBody>
        </Card>
    );
}