interface ReceivedUser {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;   
}

export interface UserResponse {
    user: ReceivedUser
}