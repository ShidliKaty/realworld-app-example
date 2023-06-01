import { Stack, Input, Button, Box } from '@chakra-ui/react'

const SignInForm = () => {
  return (
    <Stack as={'form'} spacing={4} alignItems={'flex-end'} minW={'540px'}>
      <Input as={'input'} variant='outline' size={'lg'} type='email' placeholder='Email' />

      <Input as={'input'} variant='outline' size={'lg'} type='password' placeholder='Password' />

      <Button
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
