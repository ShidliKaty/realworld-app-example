import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/api-client";

export const useComments = (slug: string) => useQuery({
    queryKey: ['articles', 'comments'],
    queryFn: () => getComments(slug)
})