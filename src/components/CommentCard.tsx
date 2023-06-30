import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import { I18nSettings, format } from 'fecha'
import { Comment } from '../entities/Comments'
import { Link } from 'react-router-dom'
import { useArticlesQueryStore, useUserStore } from '../store'
import { DeleteCommentIcon } from './DeleteCommentIcon'

type format = (date: Date, format?: string, i18n?: I18nSettings) => string

interface Props {
  comment: Comment
}

export const CommentCard = ({ comment }: Props) => {
  const user = useUserStore((s) => s.user)
  const setArticlesQuery = useArticlesQueryStore((s) => s.setArticlesQuery)
  return (
    <Box w='730px' borderWidth='1px' borderColor='#e5e5e5' borderRadius={7}>
      <Box p='20px'>
        <Text fontSize='1rem'>{comment.body}</Text>
      </Box>
      <HStack bg='#f5f5f5' px='20px' py='12px' justifyContent='space-between'>
        <HStack>
          <Avatar
            onClick={() => setArticlesQuery()}
            as={Link}
            to={'/' + comment.author.username}
            w='20px'
            h='20px'
            src={comment.author.image}
          />
          <Text
            onClick={() => setArticlesQuery()}
            as={Link}
            to={'/' + comment.author.username}
            fontSize='0.8rem'
            color='#5CB85C'
            lineHeight={1}
            fontWeight='300'
          >
            {comment.author.username}
          </Text>
          <Text fontSize='0.8rem' color='#bbb' fontWeight='300'>
            {format(new Date(`${comment.createdAt}`), 'MMMM D, YYYY')}
          </Text>
        </HStack>
        {user && user.username === comment.author.username ? (
          <DeleteCommentIcon commentId={comment.id} />
        ) : null}
      </HStack>
    </Box>
  )
}
