import { useParams } from 'react-router-dom'
import { useComments } from '../hooks/useComments'
import { CommentCard } from './CommentCard'
import { Stack } from '@chakra-ui/react'
import { useCommentsStore } from '../store'

export const CommentsList = () => {
  const { slug } = useParams()
  useComments(slug!)
  const newComment = useCommentsStore((s) => s.newComment)
  const comments = useCommentsStore((s) => s.comments)
  return (
    <Stack alignItems='center' justifyContent='center'>
      {newComment ? <CommentCard comment={newComment.comment} /> : null}
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Stack>
  )
}
