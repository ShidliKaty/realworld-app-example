import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/api-client";
import { useArticlesQueryStore } from "../store";


export const useArticles = (username?: string) => {
    const articlesQuery = useArticlesQueryStore(s => s.articlesQuery)
    return useQuery({
    queryKey: ['articles', articlesQuery, username],
    queryFn: () => getArticles(articlesQuery, username),
    // keepPreviousData: true,
})}