import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/api-client";

export const useArticles = () => useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
})