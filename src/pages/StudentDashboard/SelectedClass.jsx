import { Button, Card, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import useSelectedClass from '../../hooks/useSelectedClass';
import { AuthContext } from '../../providers/AuthProvider';

const TABLE_HEAD = ["Class Name", "Available Seats", "Total Enrolled Students", "Instructor", "Action"];

const SelectedClass = () => {
    const {user} = useContext(AuthContext);
    let selectedClass = []
    // console.log(user);
    if(user._id){
        console.log(user)
        const [classes, loading, refetch] = useSelectedClass('?studentId='+ user._id)
        selectedClass = classes; 
    }
   
    console.log(selectedClass);
    return (
        <Card className="overflow-scroll h-full w-9/12">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {selectedClass.map(( studentClass,  index) => {
                        const isLast = index === selectedClass.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {studentClass.class.className}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {studentClass.class.availableSeats}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {studentClass.class.enrolledStudents}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {studentClass.instructor.name}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                    <Button  className='mr-5' color="green">Make Payment</Button>
                                    <Button  color="amber">Delete</Button>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

export default SelectedClass;