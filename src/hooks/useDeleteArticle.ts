import { useMutation } from "@tanstack/react-query";
import { deleteArticle } from "../services/api-client";

export const useDeleteArticle = () => {
    
    return useMutation(
        (slug: string) => deleteArticle(slug), {
            onError: (error) => console.log(error)
        }
    )
};
