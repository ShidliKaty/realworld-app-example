import { Box, Text, Container, Spinner, Divider, HStack, VStack, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useArticle } from '../hooks/useArticle'
import { ArticleProfile } from '../components/ArticleProfile'
import { Tags } from '../components/Tags'
import { ButtonFollow } from '../components/ButtonFollow'
import { ButtonFav } from '../components/ButtonFav'
import { CommentsBlock } from '../components/CommentsBlock'
import { ButtonEdit } from '../components/ButtonEdit'
import { ButtonDelete } from '../components/DeleteArticle'
import { useUserStore } from '../store'

const ArticlePage = () => {
  const { slug } = useParams()
  const user = useUserStore((s) => s.user)

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
                {user && user.username === data.article.author.username ? (
                  <>
                    <ButtonEdit slug={slug!} />
                    <ButtonDelete />
                  </>
                ) : (
                  <>
                    <ButtonFollow color='#ccc' name={data.article.author.username} />
                    <ButtonFav size='sm' slug={slug!} />
                  </>
                )}
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
              <ButtonFollow color='#ccc' name={data.article.author.username} />
              <ButtonFav size='sm' slug={slug!} />
            </HStack>
          </HStack>
          <CommentsBlock />
        </Container>
      </Box>
    </>
  )
}

export default ArticlePage
