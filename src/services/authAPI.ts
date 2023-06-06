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

export interface LoginRequest {
    user: LoginUser
}

export interface ILoginResponse {
    user: User
}

export const authAPI = axios.create({
    baseURL: 'https://api.realworld.io/api'
})

// export const signUpUserFn = async (user: LoginRequest) => {
//     const response = await authAPI.post<GenericResponse>('auth/register', user);
//     return response.data;
//   };
  
  export const loginUserFn = async (user: LoginRequest | null) => {
    const response = await authAPI.post<ILoginResponse>('users/login', user);
    return response.data;
  };