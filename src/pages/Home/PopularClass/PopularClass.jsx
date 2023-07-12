import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
const PopularClass = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Typography variant='h3' className='text-center my-12'>Popular Classes</Typography>
            <div className='grid grid-cols-3'>
                <Card className="my-6 w-96">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                <Card className="my-6 w-96">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                <Card className="my-6 w-96">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default PopularClass;