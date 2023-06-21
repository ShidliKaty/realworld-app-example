import { useParams } from 'react-router-dom'
import { Link as RouteLink } from 'react-router-dom'
import { useArticle } from '../hooks/useArticle'
import {
  Box,
  Text,
  Container,
  Spinner,
  Divider,
  HStack,
  Link,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { ArticleProfile } from '../components/ArticleProfile'
import { Tags } from '../components/Tags'
import { ButtonFollow } from '../components/ButtonFollow'
import { ButtonFav } from '../components/ButtonFav'

const ArticlePage = () => {
  const { slug } = useParams()

  const { data, isLoading, error } = useArticle(slug!)

  if (isLoading)
    return (
      <Flex height={'100vh'} justifyContent='center' alignItems='center'>
        <Spinner size='xl' />
      </Flex>
    )
  if (error || !data) throw new Error()

  return (
    <>
      <Box bg='#333'>
        <Container minW='1110px' paddingY='32px' h='100%' paddingX='0'>
          <VStack spacing='1.8rem' alignItems='flex-start' justifyContent='space-between'>
            <Text fontSize='2.8rem' fontWeight='600' color='white' lineHeight='1.1'>
              {data?.article.title}
            </Text>
            <HStack justifyContent='flex-start' mt={1} spacing={7}>
              <ArticleProfile color='white' article={data?.article} />
              <HStack spacing={1}>
                <ButtonFollow name={data.article.author.username} />
                <ButtonFav likes={data.article.favoritesCount} />
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </Box>
      <Box>
        <Container minW='1110px' paddingY='32px' h='100%' paddingX='0'>
          <Text fontSize='1.2rem' lineHeight='1.8rem' mb='2rem'>
            {data.article.body}
          </Text>
          <Tags tags={data.article.tagList} />
          <Divider m='2rem' color='#bbb' />
          <HStack justifyContent='center' mt={1} mb={10} spacing={7}>
            <ArticleProfile color='#5CB85C' article={data?.article} />
            <HStack spacing={1}>
              <ButtonFollow name={data.article.author.username} />
              <ButtonFav likes={data.article.favoritesCount} />
            </HStack>
          </HStack>
          <Text textAlign='center' mb={5}>
            <Link as={RouteLink} to='/login' color='#5CB85C'>
              Sign in
            </Link>{' '}
            or{' '}
            <Link as={RouteLink} to='/register' color='#5CB85C'>
              sign up
            </Link>{' '}
            to add comments on this article.
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default ArticlePage
