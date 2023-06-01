import { Stack, Input, Button, Box } from '@chakra-ui/react'

const SignInForm = () => {
  return (
    <Box as={'form'} w={'100%'}>
      <Stack spacing={4} alignItems={'flex-end'}>
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
    </Box>
  )
}

export default SignInForm
