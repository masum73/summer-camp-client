import React from 'react';
import { useQuery } from 'react-query';

const useInstructor = () => {
    
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        
        queryFn: async() => {
            const res = await fetch('https://musical-melody-server-masum73.vercel.app/users/instructor');
            return res.json();
        }
    })

     return [users, loading, refetch]
};   

export default useInstructor;