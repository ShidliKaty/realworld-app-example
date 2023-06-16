import axios from 'axios';
import { RegisterInput } from '../entities/RegisterInput';
import { LoginRequest } from '../entities/LoginRequest';
import { UserResponse } from '../entities/UserResponses';


const authAPI = axios.create({
    baseURL: 'https://api.realworld.io/api'
})

export const signUpUserFn = async (user: RegisterInput) => {
    const response = await authAPI.post<UserResponse>('users', user);
    return response.data;
  };
  
export const loginUserFn = async (user: LoginRequest | null) => {
    const response = await authAPI.post<UserResponse>('users/login', user);
    return response.data;
  };
