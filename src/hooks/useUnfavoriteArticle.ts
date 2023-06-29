import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../store";
import { unfavoriteArticle } from "../services/api-client";
import axios from "axios";

export const useUnfavoriteArticle = () => {
    
    const setFavorited = useFavoriteStore(s => s.setFavorited)
    const navigate = useNavigate();
    return useMutation(
        (slug: string) => unfavoriteArticle(slug), {
            onSuccess: (data) => {
                setFavorited(data.article.favorited)
              },
            onError: (error) => {
                if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                    navigate('/login');
                }
                console.log(error)
            }
        }
    )
};