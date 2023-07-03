import { useMutation } from "@tanstack/react-query";
import { ArticleResponse, NewArticleRequest } from "../entities/Articles";
import { postNewArticle } from "../services/api-client";


export const useNewArticle = () => {
    return useMutation<ArticleResponse, Error, NewArticleRequest, unknown>(
        (newArticle: NewArticleRequest) => postNewArticle(newArticle), {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )
};