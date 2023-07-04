import { useMutation } from "@tanstack/react-query";
import { ArticleResponse, NewArticleRequest } from "../entities/Articles";
import { editArticle } from "../services/api-client";
import { useNavigate } from "react-router-dom";

interface Variables {
    editedArticle: NewArticleRequest,
    slug: string
}

export const useEditArticle = () => {
    const navigate = useNavigate()
    return useMutation<ArticleResponse, Error, Variables, unknown>(
        (variables: Variables) => editArticle(variables.editedArticle, variables.slug), {
            onSuccess: (data) => {
                navigate('/article/' + data.article.slug)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )
};