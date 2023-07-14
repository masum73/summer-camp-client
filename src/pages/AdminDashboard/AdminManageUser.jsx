import React from 'react';

import { Button, Card, Typography } from "@material-tailwind/react";
import useUser from '../../hooks/useUser';
import axios from 'axios';

const TABLE_HEAD = ["Name", "Email", "Role", "Action"];



const AdminManageUser = () => {
    const [users,loading, refetch] = useUser();
    console.log(users);
    const makeAdmin = (id) => {
        axios.patch(`http://localhost:5000/users/admin/${id}`)
            .then(data => {
                refetch()
            })
    }
    const makeInstructor = (id) => {
        axios.patch(`http://localhost:5000/users/instructor/${id}`)
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
                    {users.map(({ _id, name, email, role }, index) => {
                        const isLast = index === users.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {email}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {role}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Button onClick={() => makeInstructor(_id)} className='mr-5' color="green" disabled={role === "instructor"}>Make Instructor</Button>
                                    <Button onClick={() => makeAdmin(_id)} color="amber" disabled={role === "admin"}>Make Admin</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

export default AdminManageUser;