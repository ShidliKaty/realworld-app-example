import { useMutation } from "@tanstack/react-query"
import { ILoginResponse, LoginRequest, loginUserFn } from "../services/authAPI"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    return useMutation<ILoginResponse, Error, LoginRequest, unknown>(
        (userData: LoginRequest) => loginUserFn(userData), {
            onSuccess: (data) => {
                console.log(data);
                navigate('/');
              },
            onError: (error) => {
                console.log(error)
            }
        }
    )
}
