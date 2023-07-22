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
import { Link, useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const { register, handleSubmit, reset, setError, clearErrors, getValues, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photoURL: data.photoURL }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
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

    const isPasswordMatch = (password, confirmPassword) => {
        if (password !== confirmPassword) {
            return setError("confirmPassword")
        }
        console.log(password, confirmPassword);
        return clearErrors("confirmPassword");
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
                        Sign up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Input type="text" label='Name' size="lg" {...register("name", { required: true })} name="name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className='my-4'>
                            <Input type="email" label='Email' size="lg" {...register("email", { required: true })} name="email" />
                            {errors.name && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className='my-4'>
                            <Input type="text" label='Password' size="lg" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} name="password" onChange={(e) => isPasswordMatch(e.target.value, getValues("confirmPassword"))} />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                        </div>
                        <div className='my-4'>
                            <Input type="text" label='Confirm Password' size="lg" {...register("confirmPassword", {
                                required: true,

                            })} name="confirmPassword" onChange={(e) => isPasswordMatch(getValues("password"), e.target.value)} />
                            {errors.confirmPassword && <p className="text-red-600">Password is not matched</p>}

                        </div>
                        <div className='my-4'>
                            <Input type="text" label='Photo URL' size='lg' {...register("photoURL", { required: true })} name='photoURL' />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <Button color='green' type='submit' variant="gradient" fullWidth>
                            Sign up
                        </Button>

                    </form>
                </CardBody>
                <CardFooter className="pt-0">

                    <Button onClick={handleGoogleSignIn} className='mt-4' color='lime' variant="gradient" fullWidth>
                        Sign up with Google
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