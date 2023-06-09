import { Button, Container, Input, Stack, Textarea } from '@chakra-ui/react'

const NewArticlePage = () => {
  return (
    <Container minW='920px'>
      <Stack spacing={4} mx={'auto'} my={'24px'} align={'center'} minH='100vh' minW='100%'>
        <Stack as={'form'} spacing={4} alignItems={'flex-end'} minW='100%'>
          <Input size={'lg'} type='text' placeholder='Article Title' />
          <Input type='text' placeholder="What's this article about?" />
          <Textarea minH='200px' placeholder='Write your article (in markdown)' />
          <Input type='text' placeholder='Enter tags' />
          <Button
            type={'submit'}
            bg={'green'}
            color='white'
            size='lg'
            _hover={{
              bg: 'green.500',
            }}
          >
            Publish Article
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default NewArticlePage
