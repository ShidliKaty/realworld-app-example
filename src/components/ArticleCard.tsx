import { Box, Button, HStack, Heading, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { Article } from '../entities/Articles'
import { ArticleProfile } from './ArticleProfile'
import { Tags } from './Tags'

interface Props {
  article: Article
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <Box mx='-5' borderBottomWidth={2}>
      <HStack justifyContent='space-between' my={3}>
        <ArticleProfile color='#5CB85C' article={article} />
        <Button
          size='xs'
          bg='#5CB85C'
          color='white'
          _hover={{
            bg: 'green',
          }}
        >
          <Icon mr={1} as={AiFillHeart} />
          {article.favoritesCount}
        </Button>
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
