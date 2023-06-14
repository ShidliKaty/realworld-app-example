import { useMutation } from "@tanstack/react-query"
import { loginUserFn } from "../services/authAPI"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import { LoginRequest } from "../entities/LoginRequest";
import { UserResponse } from "../entities/UserResponses";

export const useLogIn = () => {
    const login = useUserStore(s => s.login)
    const navigate = useNavigate();
    return useMutation<UserResponse, Error, LoginRequest, unknown>(
        (userData: LoginRequest) => loginUserFn(userData), {
            onSuccess: (data) => {
                console.log(data);
                login(data.user)
                navigate('/');
              },
            onError: (error) => {
                console.log(error)
            }
        }
    )
}
