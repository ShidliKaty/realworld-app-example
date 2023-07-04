import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "../entities/Comments";
import { CommentRequest } from "../entities/CommentRequest";
import { postComment } from "../services/api-client";
import { useCommentsStore } from "../store";

interface Variables {
    slug: string,
    comment: CommentRequest
}

export const useAddComment = () => {
    const queryClient = useQueryClient()
    const setNewComment = useCommentsStore(s => s.setNewComment)
    return useMutation<Comment, Error, Variables, unknown>(
        (variables: Variables) => postComment(variables.slug, variables.comment), {
            onSuccess: (data) => {
                setNewComment(data);
                queryClient.invalidateQueries({
                    queryKey: ['comments']
                })
            },
            onError: (error) => {
                console.log(error)
            }
        }
    )
};