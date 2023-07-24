import React, { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { handleSubmit, register } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://musical-melody-server-nv59blkol-masum73.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-4'>
                            <Input type="email" label='Email' size="lg" {...register("email", { required: true })} name="email" />
                        </div>
                        <div className='my-4'>
                            <Input type="text" label='Password' size="lg" {...register("password", { required: true })} name="password" />
                        </div>
                        <Button color='green' type='submit' variant="gradient" fullWidth>
                            Login
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="pt-0">

                    <Button onClick={handleGoogleSignIn} className='mt-4' color='lime' variant="gradient" fullWidth>
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