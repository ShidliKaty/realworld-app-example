import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/api-client";
import { useCommentsStore } from "../store";

export const useComments = (slug: string) => {
    const setComments = useCommentsStore(s => s.setComments)
    return useQuery({
    
    queryKey: ['articles', 'comments'],
    queryFn: () => getComments(slug),
    onSuccess: (data) => {
        setComments(data.comments)
    }
})}