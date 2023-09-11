import useSWR from "swr"

import fetcher from "@/libs/fetcher";

const useSubscriber = (userId: string) => {
    const {
        data ,
        error , 
        isLoading , 
        mutate
    } = useSWR(`/api/users/subscribing/${userId}`, fetcher);

    return {
        data,error,isLoading,mutate
    }
}

export default useSubscriber;
