import { Flex, Heading, Stack, Link, Box, Input, Button } from '@chakra-ui/react'
import SignInForm from '../components/SignInForm'
import { NavLink } from 'react-router-dom'

const SignInPage = () => {
  return (
    <Flex minH='100vh' justifyContent={'center'}>
      <Stack spacing={4} mx={'auto'} my={'24px'} minW={'540px'} align={'center'}>
        <Heading lineHeight={0.6} fontSize={'2.5rem'}>
          Sign in
        </Heading>

        <Link to='/register' as={NavLink} marginTop={'16px'} color={'green'}>
          Need an account?
        </Link>
        <SignInForm />
      </Stack>
    </Flex>
  )
}

export default SignInPage
