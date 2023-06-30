import { Avatar, Button, HStack, Stack, Textarea } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useAddComment } from '../hooks/useAddComment'
import { useParams } from 'react-router-dom'
import { useUserStore } from '../store'

export const CommentsForm = () => {
  const user = useUserStore((s) => s.user)
  const { slug } = useParams()
  const addComment = useAddComment()
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: FieldValues) => {
    const newComment = data.comment.replace(/\n+$/, '')

    const commentData = {
      slug: slug!,
      comment: {
        comment: {
          body: newComment,
        },
      },
    }

    addComment.mutate(commentData)
    reset()
  }

  if (!user) return null
  return (
    <Stack justifyContent='center' alignItems='center' mb={5}>
      <Stack
        as={'form'}
        onSubmit={handleSubmit(onSubmit)}
        w='730px'
        borderWidth='1px'
        borderColor='#e5e5e5'
        spacing={0}
        borderRadius={7}
      >
        <Textarea
          {...register('comment')}
          id='comment'
          p='20px'
          outline='none'
          fontSize='1rem'
          h='100px'
          placeholder='Write a comment...'
        ></Textarea>

        <HStack bg='#f5f5f5' px='20px' py='12px' justifyContent='space-between'>
          <Avatar w='32px' h='32px' src={user.image} />
          <Button
            type={'submit'}
            size='sm'
            bg='#5CB85C'
            color='white'
            fontWeight='700'
            fontSize='0.85rem'
            _hover={{ bg: '#4a994a' }}
          >
            Post Comment
          </Button>
        </HStack>
      </Stack>
    </Stack>
  )
}
