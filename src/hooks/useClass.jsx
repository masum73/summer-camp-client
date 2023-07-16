import { useQuery } from "react-query";


const useClass = (query='') => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes' + query);
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default useClass;