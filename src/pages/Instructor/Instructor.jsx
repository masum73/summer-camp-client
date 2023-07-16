import React from 'react';
import useInstructor from '../../hooks/useInstructor';

const Instructor = () => {
    const {users, loading, refetch} = useInstructor()
    console.log(users);
    return (
        <div>
            <h2>Instructors</h2>
        </div>
    );
};

export default Instructor;