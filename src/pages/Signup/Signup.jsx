import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='w-9/12 mx-auto my-12 flex justify-center items-center'>
            <Card className="w-96 border border-lime-500 ">
                <CardHeader
                    variant="gradient"
                    color="green"
                    className="my-3 grid h-12 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Email" size="lg" />
                    <Input label="Password" size="lg" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button color='green' variant="gradient" fullWidth>
                        Sign up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have an account?
                        <Link to='/login'>
                            <Typography
                                as="a"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                Login
                            </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Signup;