import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpUserFn } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import axios, {AxiosError} from 'axios'
import { RegisterInput } from "../entities/RegisterInput";
import { UserResponse } from "../entities/UserResponses";
import { setToken } from "./useLocalStorage";

export type ErrorsResponseData = {
    email?: string[],
    username?: string[]
}

export const useSignUp = (onErrorHandler: (erros: ErrorsResponseData) => void) => {
    const queryClient = useQueryClient()
    const setUser = useUserStore((s) => s.setUser)
    const navigate = useNavigate()
    return useMutation<UserResponse, AxiosError<ErrorsResponseData> | Error, RegisterInput, unknown>(
        (userData: RegisterInput) => signUpUserFn(userData), {
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: ['users']
                }),
                setUser(data.user);
                setToken(data.user.token);
                navigate('/');
                console.log(data)
            },
            onError: (error) => {
                if (axios.isAxiosError(error) && error.response &&  error.response.status === 422)  {
                    onErrorHandler(error.response.data.errors)
                }
                console.log(error);
            }
        }
    )
};
