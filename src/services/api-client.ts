import axios from "axios";
import { getToken } from "../hooks/useLocalStorage";
import { UserResponse } from "../entities/UserResponses";


const client = axios.create({ baseURL: 'https://api.realworld.io/api' });

client.defaults.headers.common['Authorization'] = `Token ${getToken('token')}`

const SESSION_EXPIRED_STATUS_CODE = 401;

export const getUser = async () => {
   
    const response = await client.get<UserResponse>('user');
    return response.data;
  
}