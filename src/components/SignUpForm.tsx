import { Stack, Input, Button, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '../hooks/useSignUp'

const schema = z
  .object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    password: z.string().min(3, { message: 'Password must be at least 3 characters' }).max(30),
    confirmPassword: z
      .string()
      .min(3, { message: 'Password must be at least 3 characters' })
      .max(30),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

const SignUpForm = () => {
  const signUp = useSignUp()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    const { name, email, password } = data
    console.log(data)
    signUp.mutate({
      user: {
        username: name,
        email,
        password,
      },
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
      {signUp.error?.message.includes('status code 422') ? (
        <Text color={'red.600'}>name has already been taken</Text>
      ) : null}
      <Input
        {...register('name')}
        id='name'
        variant='outline'
        size={'lg'}
        type='text'
        placeholder='Username'
        borderColor={signUp.error ? 'red.600' : 'current'}
      />
      {errors.name && <Text color={'red.600'}>{errors.name.message}</Text>}

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
        {...register('password')}
        id='password'
        variant='outline'
        size={'lg'}
        type='text'
        placeholder='Password'
      />
      {errors.password && <Text color={'red.600'}>{errors.password.message}</Text>}
      <Input
        {...register('confirmPassword')}
        id='confirmPassword'
        variant='outline'
        size={'lg'}
        type='text'
        placeholder='Confirm password'
      />
      {errors.confirmPassword && <Text color={'red.600'}>{errors.confirmPassword.message}</Text>}

      <Button
        // isDisabled={!isValid}
        type={'submit'}
        disabled={true}
        bg={'green'}
        color='white'
        w='20%'
        size='lg'
        _hover={{
          bg: 'green.500',
        }}
      >
        Sign up
      </Button>
    </Stack>
  )
}

export default SignUpForm
