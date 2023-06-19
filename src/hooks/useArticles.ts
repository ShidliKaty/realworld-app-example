import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/api-client";
import { useArticlesQueryStore } from "../store";

export const useArticles = () => {
    const articlesQuery = useArticlesQueryStore(s => s.articlesQuery)
    return useQuery({
    queryKey: ['articles', articlesQuery],
    queryFn: () => getArticles(articlesQuery),
    keepPreviousData: true,
})}