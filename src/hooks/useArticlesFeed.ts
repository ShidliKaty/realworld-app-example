import { useQuery } from "@tanstack/react-query"
import { useArticlesFeedQueryStore } from "../store"
import { getArticlesFeed } from "../services/api-client"
import { getToken } from "./useLocalStorage"

export const useArticlesFeed = () => {
    const token = getToken('token')
    const articlesFeedQuery = useArticlesFeedQueryStore(s => s.articlesFeedQuery)
    return useQuery({
    queryKey: ['feed', articlesFeedQuery],
    queryFn: () => getArticlesFeed(articlesFeedQuery),
    enabled: Boolean(token)
})}