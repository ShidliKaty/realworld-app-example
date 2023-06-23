import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import { I18nSettings, format } from 'fecha'
import { Article } from '../entities/Articles'
import { Link } from 'react-router-dom'

type format = (date: Date, format?: string, i18n?: I18nSettings) => string

interface Props {
  article: Article
  color: string
}

export const ArticleProfile = ({ article, color }: Props) => {
  return (
    <HStack>
      <Avatar
        as={Link}
        to={'/' + article.author.username}
        w='32px'
        h='32px'
        src={article.author.image}
      />
      <Box ml='2'>
        <Text
          as={Link}
          to={'/' + article.author.username}
          fontSize='1rem'
          lineHeight={1}
          fontWeight='600'
          color={color}
        >
          {article.author.username}
        </Text>
        <Text fontSize='0.8rem' color='#bbb'>
          {format(new Date(`${article.createdAt}`), 'MMMM D, YYYY')}
        </Text>
      </Box>
    </HStack>
  )
}
