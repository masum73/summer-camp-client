import React from 'react';
import { useQuery } from 'react-query';

const useSelectedClass = (query='') => {
    const {data: selectedClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selectedClass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/selectedclass' + query);
            return res.json();
        }
    })

    return [selectedClass, loading, refetch]
};

export default useSelectedClass;