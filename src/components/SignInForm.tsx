import { Stack, Input, Button, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogIn } from '../hooks/useLogIn'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

type FormData = z.infer<typeof schema>

const SignInForm = () => {
  const logIn = useLogIn()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    logIn.mutate({
      user: data,
    })
  }
  return (
    <Stack
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      alignItems={'flex-end'}
      minW={'540px'}
    >
      {logIn.error?.message.includes('status code 403') ? (
        <Text color={'red.600'}>email or password is invalid</Text>
      ) : null}
      <Input
        {...register('email')}
        id='email'
        variant='outline'
        size={'lg'}
        type='text'
        placeholder='Email'
      />
      {errors.email && <Text color={'red.600'}>{errors.email.message}</Text>}

      <Input
        {...register('password', { required: true })}
        id='password'
        variant='outline'
        size={'lg'}
        type='text'
        placeholder='Password'
      />
      {errors.password && <Text color={'red.600'}>{errors.password.message}</Text>}

      <Button
        isDisabled={!isValid}
        type={'submit'}
        disabled={true}
        bg={'#5CB85C'}
        color='white'
        w='20%'
        size='lg'
        _hover={{
          bg: 'green',
        }}
      >
        Sign in
      </Button>
    </Stack>
  )
}

export default SignInForm
