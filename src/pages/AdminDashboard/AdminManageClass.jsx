import React from 'react';
import useClass from '../../hooks/useClass';
import { Button, Card, Input, Typography } from '@material-tailwind/react';
import axios from 'axios';

const TABLE_HEAD = ["Class Name", "Total Enrolled Students", "Class Status", "Feedback", "Action"];

const AdminManageClass = () => {
    const [classLists,loading, refetch] = useClass();
    console.log(classLists);


    const makeApproved = (id) => {
        axios.patch(`https://musical-melody-server-nv59blkol-masum73.vercel.app/updateclass/${id}`, {status: "approved"})
            .then(data => {
                refetch()
            })
    }
    const makeDenied = (id) => {
        const feedback = prompt("Your feedback here!")

        axios.patch(`https://musical-melody-server-nv59blkol-masum73.vercel.app/updateclass/${id}`, {status: "denied", feedback: feedback})
            .then(data => {
                refetch()
            })
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
                                    <Button onClick={() => makeApproved(_id)} className='mr-5' color="green" disabled={status === "approved"}>Approved</Button>
                                    <Button onClick={() => makeDenied(_id)} color="amber" disabled={status === "denied"}>Denied</Button>
                                    {/* <Input></Input>
                                    <Button onClick={() => sendFeedback(_id)} color="blue">Send Feedback</Button> */}
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

export default AdminManageClass;