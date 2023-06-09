import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterInput, RegisterResponse, signUpUserFn } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import axios, {AxiosError} from 'axios'

export type ErrorsResponseData = {
    email?: string[],
    username?: string[]
}

export const useSignUp = (onErrorHandler: (erros: ErrorsResponseData) => void) => {
    const queryClient = useQueryClient()
    const login = useUserStore((s) => s.login)
    const navigate = useNavigate()
    return useMutation<RegisterResponse, AxiosError<ErrorsResponseData> | Error, RegisterInput, unknown>(
        (userData: RegisterInput) => signUpUserFn(userData), {
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: ['users']
                }),
                login(data.user),
                console.log(data)
                navigate('/')
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
