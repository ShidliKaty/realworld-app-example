import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../services/api-client";
import { useProfileFollowingStore } from "../store";

export const useArticle = (slug: string) => {
    const setFollowing = useProfileFollowingStore(s => s.setFollowing)
    return useQuery({
    queryKey: ['articles', slug],
    queryFn: () => getArticle(slug),
    onSuccess: (data) => setFollowing(data.article.author.following)
})}