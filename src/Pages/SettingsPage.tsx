import { Button, Heading, Input, Stack, Textarea, Text } from '@chakra-ui/react'
import { useUserStore } from '../store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getToken } from '../hooks/useLocalStorage'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateUser } from '../hooks/useUpdateUser'

const SettingsPage = () => {
  const user = useUserStore((s) => s.user)
  const token = getToken('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && !token) {
      navigate('/login')
    }
  }, [])

  const onErrorHandler = (backendErr: string) => {
    if (backendErr.includes('email')) {
      setError('email', { message: 'This email is aleady exists' })
    }
    if (backendErr.includes('username')) {
      setError('username', { message: 'This name is aleady exists' })
    }
  }

  const { mutate } = useUpdateUser(onErrorHandler)

  const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }).min(0).or(z.literal('')),
    password: z.string(),
    username: z.string(),
    bio: z.string(),
    image: z.string().min(0).url('Enter an URL').max(255).or(z.literal('')),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (inputData: FormData) => {
    const { username, email, password, bio, image } = inputData
    mutate({
      user: {
        email,
        password,
        username,
        bio,
        image,
      },
    })
  }

  return (
    <Stack spacing={4} mx={'auto'} my={'24px'} w={'540px'} align={'center'} minH='100vh'>
      <Heading>Your Settings</Heading>
      <Stack
        as={'form'}
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}
        alignItems={'flex-end'}
        minW='100%'
      >
        {errors.image && <Text color={'red.600'}>{errors.image.message}</Text>}
        <Input
          {...register('image')}
          size={'lg'}
          type='text'
          placeholder='URL of profile picture'
          defaultValue={user?.image}
        />
        {errors.username && <Text color={'red.600'}>{errors.username.message}</Text>}
        <Input
          {...register('username')}
          size={'lg'}
          type='text'
          placeholder='Username'
          defaultValue={user?.username}
        />
        <Textarea {...register('bio')} size={'lg'} placeholder='Short bio about you' h='200px' />
        {errors.email && <Text color={'red.600'}>{errors.email.message}</Text>}
        <Input
          {...register('email')}
          size={'lg'}
          type='text'
          placeholder='Email'
          defaultValue={user?.email}
        />
        <Input {...register('password')} size={'lg'} type='password' placeholder='New Password' />
        <Button
          type={'submit'}
          bg={'#5CB85C'}
          color='white'
          size='lg'
          _hover={{
            bg: 'green',
          }}
        >
          Update Settings
        </Button>
      </Stack>
    </Stack>
  )
}

export default SettingsPage
