import { DeleteIcon } from '@chakra-ui/icons'
import { useDeleteComment } from '../hooks/useDeleteComment'
import { useParams } from 'react-router-dom'
import { useCommentsStore } from '../store'

interface Props {
  commentId: number
}

export const DeleteCommentIcon = ({ commentId }: Props) => {
  const newComment = useCommentsStore((s) => s.newComment)
  const deleteComment = useCommentsStore((s) => s.deleteComment)
  const deleteNewComment = useCommentsStore((s) => s.deleteNewComment)
  const { slug } = useParams()

  const removeComment = useDeleteComment()

  const onDeleteComment = () => {
    const deleteData = {
      slug: slug!,
      id: commentId,
    }
    removeComment.mutate(deleteData)
    if (newComment) {
      deleteNewComment()
    } else deleteComment(commentId)
  }
  return (
    <DeleteIcon
      onClick={() => onDeleteComment()}
      color='#878686'
      w='14px'
      _hover={{ color: '#333' }}
      cursor='pointer'
    />
  )
}
