import { Button, Container, Input, Stack, Textarea, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEditArticle } from '../hooks/useEditArticle'
import { useParams } from 'react-router-dom'
import { useArticle } from '../hooks/useArticle'

const schema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }).or(z.literal('')),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters' })
    .or(z.literal('')),
  body: z.string().min(10, { message: 'Article must be at least 10 characters' }).or(z.literal('')),
  tags: z.string(),
})

type FormData = z.infer<typeof schema>

const EditArticlePage = () => {
  const { slug } = useParams()

  const { data } = useArticle(slug!)

  const editArticle = useEditArticle()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (inputData: FormData) => {
    const { title, description, body, tags } = inputData

    const tagList = tags ? tags.replace(/ /g, '').split(',') : []

    const articleData = {
      editedArticle: {
        article: {
          title,
          description,
          body,
          tagList,
        },
      },
      slug: slug!,
    }
    editArticle.mutate(articleData)
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
          <Input
            {...register('title')}
            size={'lg'}
            type='text'
            placeholder='Article Title'
            defaultValue={data?.article.title}
          />
          {errors.description && <Text color={'red.600'}>{errors.description.message}</Text>}
          <Input
            {...register('description')}
            type='text'
            placeholder="What's this article about?"
            defaultValue={data?.article.description}
          />
          {errors.body && <Text color={'red.600'}>{errors.body.message}</Text>}
          <Textarea
            {...register('body')}
            minH='200px'
            placeholder='Write your article'
            defaultValue={data?.article.body}
          />
          <Input
            {...register('tags')}
            type='text'
            placeholder='Enter tags'
            defaultValue={data?.article.tagList.join(', ')}
          />
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

export default EditArticlePage
