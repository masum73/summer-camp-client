import { Button, Input } from '@material-tailwind/react';

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const InstructorAddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    console.log(user);
    const onSubmit = (data) => {
        console.log(data);

        axios.post('http://localhost:5000/addclass', { ...data, instructor: user._id , price: parseFloat(data.price), availableSeats: parseFloat(data.availableSeats)  })
            .then(data => {
                // refetch()
                reset()
            })
    }
    return (
        <div>
            <h2 className='text-2xl my-4'>Instructor - Add a Class</h2>
            <form className='w-9/12' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input type="text" label='Class Name' size="lg" {...register("className", { required: true })} name="className" />
                </div>
                <div className='my-4'>
                    <Input type="text" label='Class Photo' size="lg" {...register("classPhoto", { required: true })} name="classPhoto" />
                </div>
                <div className='my-4'>
                    <Input type="number" label='Available Seats' size='lg' {...register("availableSeats", { required: true })} name='availableSeats' />
                </div>
                <div className='my-4'>
                    <Input type="number" label='Price' size='lg' {...register("price", { required: true })} name='price' />
                </div>
                <div className='my-4'>
                    <label>Instructor Name</label>
                    <Input type="text" disabled defaultValue={user?.name} size='lg' />
                </div>
                <div className='my-4'>
                    <label>Instructor Email</label>
                    <Input type="text" disabled defaultValue={user?.email} size='lg' />
                </div>
                <Button color='green' type='submit' variant="gradient" fullWidth>
                    Add this class
                </Button>

            </form>
        </div>
    );
};

export default InstructorAddClass;