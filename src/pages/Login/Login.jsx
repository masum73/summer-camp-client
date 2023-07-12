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

const Login = () => {
    return (
        <div className='w-9/12 mx-auto my-12 flex justify-center items-center'>
            <Card className="w-96 border border-lime-500 ">
                <CardHeader
                    variant="gradient"
                    color="green"
                    className="my-3 grid h-12 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Login
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Email" size="lg" />
                    <Input label="Password" size="lg" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button color='green' variant="gradient" fullWidth>
                        Login
                    </Button>
                    <Button className='mt-4' color='lime' variant="gradient" fullWidth>
                        Login with Google
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Link to='/signup'>
                            <Typography
                                as="a"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;