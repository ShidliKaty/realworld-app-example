import { useMutation } from "@tanstack/react-query"
import { loginUserFn } from "../services/authAPI"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import { LoginRequest } from "../entities/LoginRequest";
import { UserResponse } from "../entities/UserResponses";
import { setToken } from "./useLocalStorage";


export const useLogIn = () => {
   
    const setUser = useUserStore(s => s.setUser)
    const navigate = useNavigate();
    return useMutation<UserResponse, Error, LoginRequest, unknown>(
        (userData: LoginRequest) => loginUserFn(userData), {
            onSuccess: (data) => {
                setUser(data.user)
                setToken(data.user.token)
                navigate('/');
              },
            onError: (error) => {
                console.log(error)
            }
        }
    )
}
