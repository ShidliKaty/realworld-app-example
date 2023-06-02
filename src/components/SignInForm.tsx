import { Stack, Input, Button, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

type FormData = z.infer<typeof schema>

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => {
    console.log(errors)
    console.log(data)
  }
  return (
    <Stack
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      alignItems={'flex-end'}
      minW={'540px'}
    >
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
        bg={'green'}
        color='white'
        w='20%'
        size='lg'
        _hover={{
          bg: 'green.500',
        }}
      >
        Sign in
      </Button>
    </Stack>
  )
}

export default SignInForm