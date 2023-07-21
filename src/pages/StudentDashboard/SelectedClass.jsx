import { Button, Card, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import useSelectedClass from '../../hooks/useSelectedClass';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Class Name", "Available Seats", "Total Enrolled Students", "Price","Instructor", "Action"];

const SelectedClass = () => {
    const {user} = useContext(AuthContext);
    let selectedClass = []
    let refetchTo = () => {

    }
    // console.log(user);
    if(user._id){
        console.log(user)
        const [classes, loading, refetch] = useSelectedClass('?status=selected&studentId='+ user._id)
        selectedClass = classes; 
        refetchTo = refetch;
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/selectedclass/${id}`)
        .then(data => {
            refetchTo()
        })
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
                                        ${studentClass.class.price}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {studentClass.instructor.name}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                    <Link to={`/dashboard/payment/${studentClass._id}`}><Button  className='mr-5' color="green">Make Payment</Button></Link>
                                    <Button onClick={() => handleDelete(studentClass._id)}  color="amber">Delete</Button>
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