import { useMutation } from "@tanstack/react-query";
import { RegisterInput, RegisterResponse, signUpUserFn } from "../services/authAPI";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
    const navigate = useNavigate();
    return useMutation<RegisterResponse, Error, RegisterInput, unknown>(
        (userData: RegisterInput) => signUpUserFn(userData), {
            onSuccess: (data) => {
                console.log(data);
                navigate('/')
            },
            onError: (error) => {
                console.log(error)
            }
        }
    )
};
