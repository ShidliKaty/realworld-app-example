import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { followProfile } from "../services/api-client";
import axios from "axios";


export const useFollowProfile = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    return useMutation(
        (username: string) => followProfile(username), {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['follow'],
                  })
              },
            onError: (error) => {
                if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                    navigate('/login');
                }
                console.log(error)
            }
        }
    )
}