import { Button, Container, Input, Stack, Textarea, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNewArticle } from '../hooks/useNewArticle'

const schema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  description: z.string().min(3, { message: 'Description must be at least 3 characters' }),
  body: z.string().min(10, { message: 'Article must be at least 10 characters' }),
  tags: z.string(),
})

type FormData = z.infer<typeof schema>

const NewArticlePage = () => {
  const { mutate } = useNewArticle()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (inputData: FormData) => {
    const { title, description, body, tags } = inputData

    const tagList = tags ? tags.replace(/ /g, '').split(',') : []

    mutate({
      article: {
        title,
        description,
        body,
        tagList,
      },
    })
  }

  return (
    <Container minW='920px'>
      <Stack spacing={4} mx={'auto'} my={'24px'} align={'center'} minH='100vh' minW='100%'>
        <Stack
          as={'form'}
          onSubmit={handleSubmit(onSubmit)}
          spacing={4}
          alignItems={'flex-end'}
          minW='100%'
        >
          {errors.title && <Text color={'red.600'}>{errors.title.message}</Text>}
          <Input {...register('title')} size={'lg'} type='text' placeholder='Article Title' />
          {errors.description && <Text color={'red.600'}>{errors.description.message}</Text>}
          <Input
            {...register('description')}
            type='text'
            placeholder="What's this article about?"
          />
          {errors.body && <Text color={'red.600'}>{errors.body.message}</Text>}
          <Textarea {...register('body')} minH='200px' placeholder='Write your article' />
          <Input {...register('tags')} type='text' placeholder='Enter tags' />
          <Button
            type={'submit'}
            bg={'#5CB85C'}
            color='white'
            size='lg'
            _hover={{
              bg: 'green',
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
