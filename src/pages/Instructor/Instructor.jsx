import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const Instructor = () => {
    const [users, loading, refetch] = useInstructor()
    console.log(users);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center'>
                {
                    users.map((user, index) => {
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

export default Instructor;