import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "../store";
import { UserResponse } from "../entities/UserResponses";
import { UpdateUserRequest } from "../entities/UpdateUserRequest";
import { updateUser } from "../services/api-client";
import { setToken } from "./useLocalStorage";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useUpdateUser = (onErrorHandler: (error: string) => void) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const setUser = useUserStore((s) => s.setUser)
    return useMutation<UserResponse, AxiosError | Error, UpdateUserRequest, unknown>(
        (userData: UpdateUserRequest) => updateUser(userData), {
            onSuccess: (data) => {
                console.log(data);
                queryClient.invalidateQueries({
                    queryKey: ['users']
                }),
                setUser(data.user);
                setToken(data.user.token);
                navigate('/' + data.user.username);
               
            },
            onError: (error) => {
                if (axios.isAxiosError(error) && error.response &&  error.response.status === 500)  {
                    onErrorHandler(error.response.data)
                }
                console.log(error);
            }
        }
    )
};
