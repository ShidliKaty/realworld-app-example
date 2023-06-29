import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../services/api-client";
import { useFavoriteStore, useProfileFollowingStore } from "../store";

export const useArticle = (slug: string) => {
    const setFollowing = useProfileFollowingStore(s => s.setFollowing)
    const setFavorited = useFavoriteStore(s => s.setFavorited)
    const setFavoritesCount = useFavoriteStore(s => s.setFavoritesCount)
    return useQuery({
    queryKey: ['articles', slug],
    queryFn: () => getArticle(slug),
    onSuccess: (data) => {
        setFollowing(data.article.author.following)
        setFavorited(data.article.favorited)
        setFavoritesCount(data.article.favoritesCount)
    }
})}