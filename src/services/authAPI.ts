import axios from 'axios';
import { RegisterInput } from '../entities/RegisterInput';
import { LoginRequest } from '../entities/LoginRequest';
import { UserResponse } from '../entities/UserResponses';
import { Tags } from '../entities/Tags';


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

export const getTags = async () => {
    const response = await authAPI.get<Tags>('tags');
    return response.data;
  };