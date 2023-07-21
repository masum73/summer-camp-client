import React, { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import useClass from '../../../hooks/useClass';
import { AuthContext } from '../../../providers/AuthProvider';
const PopularClass = () => {
    const [classLists, loading, refetch] = useClass()
    const { user } = useContext(AuthContext);
    console.log(classLists);
    return (
        <div className='w-9/12 mx-auto'>
            <Typography variant='h3' className='text-center my-12'>Popular Class</Typography>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center'>
                {
                    classLists.slice(0, 6).map((classes, index) => {
                        return <Card key={index} className={`my-12 w-96 mx-auto ${classes.availableSeats === 0 ? 'bg-red-200' : ''}`}>
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img src={classes.classPhoto} alt="img-blur-shadow" layout="fill" />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {classes.className}
                                </Typography>
                                <Typography>
                                    Available Seats:  {classes.availableSeats}
                                </Typography>
                                <Typography>
                                    Price:  ${classes.price}
                                </Typography>
                                <Typography>
                                    Instructor Name: {classes.instructor.name}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button color='green' disabled={user?.role === 'admin' || user?.role === 'instructor' || classes.availableSeats === 0} onClick={() => mustLogin(classes)}>Select Class</Button>
                            </CardFooter>
                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default PopularClass;