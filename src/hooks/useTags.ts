import { useQuery } from "@tanstack/react-query";
import { getTags } from "../services/api-client";



export const useTags = () => useQuery({
    queryKey: ['tags'],
    queryFn: getTags
})