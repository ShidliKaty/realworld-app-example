import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/api-client";
import { useUserStore } from "../store";
import { getToken } from "./useLocalStorage";

export const useUser = () => {
    const setUser = useUserStore(s => s.setUser)
    const token = getToken('token')
   
    return useQuery({
    
    queryKey: ['user'],
    queryFn: getUser,
    onSuccess: (data) => {
        console.log(data);
        setUser(data.user)
      },
    enabled: Boolean(token)
    
})}
    
