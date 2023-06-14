interface NewUser {
    username: string;
    email: string;
    password: string;
}
export interface RegisterInput {
    user: NewUser
}