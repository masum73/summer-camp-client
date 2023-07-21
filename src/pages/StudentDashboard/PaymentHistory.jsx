import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Card, Typography } from '@material-tailwind/react';
import useSelectedClass from '../../hooks/useSelectedClass';

const TABLE_HEAD = ["Class Name", "Price", "Status", "Date","Transaction ID"];
const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    let paidClassHistory = []
    let refetchTo = () => {

    }
    // console.log(user);
    if(user._id){
        console.log(user)
        const [classes, loading, refetch] = useSelectedClass('?status=paid&studentId='+ user._id)
        paidClassHistory = classes; 
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
                    {paidClassHistory.map(( paidClass,  index) => {
                        const isLast = index === paidClassHistory.length - 1;
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
                                        ${paidClass.class.price}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.status}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.paymentDate}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                        {paidClass.transactionId}
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

export default PaymentHistory;