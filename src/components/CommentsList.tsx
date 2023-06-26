import { useParams } from 'react-router-dom'
import { useComments } from '../hooks/useComments'
import { CommentCard } from './CommentCard'
import { Box, Stack } from '@chakra-ui/react'

export const CommentsList = () => {
  const { slug } = useParams()
  const { data } = useComments(slug!)
  return (
    <Stack alignItems='center' justifyContent='center'>
      {data?.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Stack>
  )
}
