import React from 'react';
import useClass from '../../hooks/useClass';
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ["Class Name", "Total Enrolled Students","Class Status", "Feedback", "Action"];

const InstructorMyClass = () => {
    const [classLists,loading, refetch] = useClass();

    return (
        <div>
            <h1>Instructor My class</h1>
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
                        {classLists.map(({ _id, className, enrolledStudents, status, feedback }, index) => {
                            const isLast = index === classLists.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {className}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {enrolledStudents}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {status}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {feedback}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Link to={`/dashboard/instructormyclass/updateclass/${_id}`}><Button  className='mr-5' color="green" >Update class</Button></Link>
                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default InstructorMyClass;