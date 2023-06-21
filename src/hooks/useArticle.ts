import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../services/api-client";

export const useArticle = (slug: string) => useQuery({
    queryKey: ['articles', slug],
    queryFn: () => getArticle(slug)
})