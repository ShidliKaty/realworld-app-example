import { useMutation } from "@tanstack/react-query"
import { ILoginResponse, LoginRequest, loginUserFn } from "../services/authAPI"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";

export const useLogIn = () => {
    const login = useUserStore(s => s.login)
    const navigate = useNavigate();
    return useMutation<ILoginResponse, Error, LoginRequest, unknown>(
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
