
import React, { useContext } from 'react';
import useSelectedClass from '../../hooks/useSelectedClass';
import { AuthContext } from '../../providers/AuthProvider';
import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ["Class Name", "Available Seats", "Total Enrolled Students", "Price","Instructor", "Status"];

const EnrolledClass = () => {
    const {user} = useContext(AuthContext);
    let paidClass = []
    let refetchTo = () => {

    }
    // console.log(user);
    if(user._id){
        console.log(user)
        const [classes, loading, refetch] = useSelectedClass('?status=paid&studentId='+ user._id)
        paidClass = classes; 
        refetchTo = refetch;
    }


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
                    {paidClass.map(( paidClass,  index) => {
                        const isLast = index === paidClass.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.class.className}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.class.availableSeats}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.class.enrolledStudents}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        ${paidClass.class.price}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.instructor.name}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.status}
                                    </Typography>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

export default EnrolledClass;