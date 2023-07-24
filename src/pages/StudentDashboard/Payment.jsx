import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { studentClassId } = useParams()
    const [studentClass, setStudentClass] = useState(null);
    useEffect(() => {

        axios.get(`https://musical-melody-server.vercel.app/selectedclass/${studentClassId}`)
            .then(data => {
                // console.log(data.data);
                setStudentClass(data.data)
            })

    }, [])
    console.log(studentClass);
    return (
        <div>
            <h2>Payment Page</h2>
            <div className='flex gap-3'>
                <h2>Class Name: {studentClass?.class?.className}</h2>
                <h2>Class Price: ${studentClass?.class?.price}</h2>
            </div>
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm studentClass={studentClass}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;