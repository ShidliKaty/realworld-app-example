interface UpdateUser {
    email: string,
    password: string,
    username: string,
    bio: string,
    image: string
}

export interface UpdateUserRequest {
    user: UpdateUser
}