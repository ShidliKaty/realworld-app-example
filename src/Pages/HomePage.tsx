import { Container, HStack, Box } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { TagsBox } from '../components/TagsBox'
import { PageButtons } from '../components/PageButtons'
import { ArticlesList } from '../components/ArticlesList'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Container minW='1110px'>
        <HStack spacing={8} alignItems='flex-start' pt={5}>
          <Box mb={10}>
            <ArticlesList />
            <PageButtons />
          </Box>
          <TagsBox />
        </HStack>
      </Container>
    </>
  )
}

export default HomePage
