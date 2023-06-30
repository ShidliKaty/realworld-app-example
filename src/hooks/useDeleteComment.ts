import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../services/api-client";


export const useDeleteComment = () => {
    const queryClient = useQueryClient()
    interface Variables {
        slug: string, 
        id: number 
    }
    return useMutation(
        (variables: Variables) => deleteComment(variables.slug, variables.id), {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['comments']
                })
            },
            onError: (error) => console.log(error)
        }
    )
};