import { useQuery } from "react-query";


const useClass = (query='') => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://musical-melody-server-masum73.vercel.app/classes' + query);
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default useClass;