import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonial = () => {
    return (
        <div className='w-9/12 mx-auto'>
           <Typography variant='h3' className='text-center my-12'>Testimonials</Typography>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;I have an amazing experience!! love the classes.&quot;
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    John Smith
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Software Engineer</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;It's really affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Mike Costa
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">MERN Developer</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            &quot;High valued instructors and premium classes!!&quot;
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Testimonial;