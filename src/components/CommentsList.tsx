import { useParams } from 'react-router-dom'
import { useComments } from '../hooks/useComments'
import { CommentCard } from './CommentCard'
import { Spinner, Stack, Text } from '@chakra-ui/react'
import { useCommentsStore } from '../store'

export const CommentsList = () => {
  const { slug } = useParams()
  const { data, isLoading } = useComments(slug!)
  const newComment = useCommentsStore((s) => s.newComment)
  const comments = useCommentsStore((s) => s.comments)
  return (
    <Stack alignItems='center' justifyContent='center'>
      {isLoading && <Spinner />}
      {(!data || data.comments.length === 0) && <Text>No comments...</Text>}
      {newComment ? <CommentCard comment={newComment.comment} /> : null}
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Stack>
  )
}
