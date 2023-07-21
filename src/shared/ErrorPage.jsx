import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='grid justify-center items-center'>
            
            <img style={{minHeight: "80vh"}} src="https://img.freepik.com/free-photo/error-something-went-wrong-construction-concept_53876-133661.jpg?w=1060&t=st=1689959975~exp=1689960575~hmac=44d5be0366f558b3fdd2db76a228434a86aedc4adb9bff5276809f382c1f4625"/>
            <Link to='/'><Button className='flex justify-start items-center mx-auto my-12' color='red'>Go Home</Button></Link>
        </div>
    );
};

export default ErrorPage;