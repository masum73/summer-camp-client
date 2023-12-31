import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import useInstructor from '../../../hooks/useInstructor';

const PopularInstructor = () => {
    const [users, loading, refetch] = useInstructor();

    return (
        <div className='w-9/12 mx-auto'>
            <Typography variant='h3' className='text-center my-12'>Popular Instructor</Typography>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center'>
                {
                    users.slice(0,6).map((user, index) => {
                        return <Card  key={index} className='my-12 w-96 mx-auto'>
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img src={user.photoURL} alt="img-blur-shadow" layout="fill" />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                   Name: {user.name}
                                </Typography>
                                <Typography>
                                    Email:  {user.email}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                {/* <Button disabled={user?.role === 'admin' || user?.role === 'instructor' || classes.availableSeats === 0} onClick={mustLogin}>Select Class</Button> */}
                            </CardFooter>
                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default PopularInstructor;