import React from 'react';
import { useQuery } from 'react-query';

const useInstructor = () => {
    
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users/instructor');
            return res.json();
        }
    })

     return [users, loading, refetch]
};   

export default useInstructor;