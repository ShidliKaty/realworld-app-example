import { useQuery } from "@tanstack/react-query";
import { getTags } from "../services/authAPI";


export const useTags = () => useQuery({
    queryKey: ['tags'],
    queryFn: getTags
})