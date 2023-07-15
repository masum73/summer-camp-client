import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InstructorUpdateClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const [cls, setCls] = useState(null);
    const {id} = useParams('id')
    console.log({id});
    useEffect(() => {
        axios.get(`http://localhost:5000/classes/${id}`)
            .then(data => {
                setCls(data.data)
                console.log(data.data);
            })
    }, [])

    const onSubmit = (submitData) => {
        console.log(submitData);
        axios.patch(`http://localhost:5000/updateclass/${id}`, {...submitData})
            .then(data => {
                console.log(data);
                setCls(data.data)
            })
    }

    return (
        <div>
            <h2 className='text-2xl my-4'>Instructor - Update Class</h2>
            <form className='w-9/12' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input type="text" defaultValue={cls?.className} label='Class Name' size="lg" {...register("className", { required: true })} name="className" />
                </div>
                <div className='my-4'>
                    <Input type="text" defaultValue={cls?.classPhoto} label='Class Photo' size="lg" {...register("classPhoto", { required: true })} name="classPhoto" />
                </div>
                <div className='my-4'>
                    <Input type="number" defaultValue={cls?.availableSeats} label='Available Seats' size='lg' {...register("availableSeats", { required: true })} name='availableSeats' />
                </div>
                <div className='my-4'>
                    <Input type="number" defaultValue={cls?.price} label='Price' size='lg' {...register("price", { required: true })} name='price' />
                </div>
                <Button color='green' type='submit' variant="gradient" fullWidth>
                    Update this class
                </Button>

            </form>
        </div>
    );
};

export default InstructorUpdateClass;