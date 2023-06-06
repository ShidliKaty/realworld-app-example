import axios from 'axios';


export interface LoginUser {
    email: string;
    password: string;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
        
}

export interface NewUser {
    username: string;
    email: string;
    password: string;
}
export interface RegisterInput {
    user: NewUser
}

export interface LoginRequest {
    user: LoginUser
}

export interface ILoginResponse {
    user: User
}

export interface RegisterResponse {
    user: User
}

export const authAPI = axios.create({
    baseURL: 'https://api.realworld.io/api'
})

export const signUpUserFn = async (user: RegisterInput) => {
    const response = await authAPI.post<RegisterResponse>('users', user);
    return response.data;
  };
  
  export const loginUserFn = async (user: LoginRequest | null) => {
    const response = await authAPI.post<ILoginResponse>('users/login', user);
    return response.data;
  };