import { Box, HStack, Heading, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Article } from '../entities/Articles'
import { ArticleProfile } from './ArticleProfile'
import { Tags } from './Tags'
import { ButtonLikes } from './ButtonLikes'

interface Props {
  article: Article
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <Box borderBottomWidth={2}>
      <HStack justifyContent='space-between' my={3}>
        <ArticleProfile color='#5CB85C' article={article} />
        <ButtonLikes likes={article.favoritesCount} />
      </HStack>
      <Link to={'/article/' + article.slug}>
        <Heading fontSize='1.5rem'>{article.title}</Heading>
        <Text color='gray'>{article.description}</Text>
        <HStack justifyContent='space-between' my={4}>
          <Box as={'span'} fontSize='0.8rem' color='gray.400'>
            Read more...
          </Box>
          <Tags tags={article.tagList} />
        </HStack>
      </Link>
    </Box>
  )
}
