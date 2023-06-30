import { Profile } from "./Profile"

export interface Comment {
    id:	number,
    createdAt:	string,
    updatedAt:	string,
    body:	string,
    author: Profile
}

export interface Comments {
    comments: Comment[]
}

export interface Comment {
    comment: Comment
}