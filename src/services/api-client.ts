import axios from "axios";
import { getToken } from "../hooks/useLocalStorage";
import { UserResponse } from "../entities/UserResponses";
import { Tags } from "../entities/Tags";


const client = axios.create({ baseURL: 'https://api.realworld.io/api' });



const SESSION_EXPIRED_STATUS_CODE = 401;

export const getUser = async () => {
    client.defaults.headers.common['Authorization'] = `Token ${getToken('token')}`
   
    const response = await client.get<UserResponse>('user');
    return response.data;
  
}
export const getTags = async () => {
    const response = await client.get<Tags>('tags');
    return response.data;
  };