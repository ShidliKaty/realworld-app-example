import { useMutation } from "@tanstack/react-query";
import { ArticleResponse, NewArticleRequest } from "../entities/Articles";
import { postNewArticle } from "../services/api-client";
import { useNavigate } from "react-router-dom";


export const useNewArticle = () => {
    const navigate = useNavigate()
    return useMutation<ArticleResponse, Error, NewArticleRequest, unknown>(
        (newArticle: NewArticleRequest) => postNewArticle(newArticle), {
            onSuccess: (data) => {
                navigate('/article/' + data.article.slug)
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )
};