import { DeleteIcon } from '@chakra-ui/icons'
import { useDeleteComment } from '../hooks/useDeleteComment'
import { useParams } from 'react-router-dom'
import { useCommentsStore } from '../store'

interface Props {
  commentId: number
}

export const DeleteCommentIcon = ({ commentId }: Props) => {
  const deleteComment = useCommentsStore((s) => s.deleteComment)
  const { slug } = useParams()

  const removeComment = useDeleteComment()

  const onDeleteComment = () => {
    const deleteData = {
      slug: slug!,
      id: commentId,
    }
    removeComment.mutate(deleteData)
    deleteComment(commentId)
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
