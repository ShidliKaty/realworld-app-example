import { Flex, Heading, Stack, Link } from '@chakra-ui/react'
import SignInForm from '../components/SignInForm'
import { NavLink } from 'react-router-dom'

const SignInPage = () => {
  return (
    <Stack spacing={4} mx={'auto'} my={'24px'} minW={'540px'} align={'center'} minH='100vh'>
      <Heading lineHeight={0.6} fontSize={'2.5rem'} mt={'24px'}>
        Sign in
      </Heading>

      <Link to='/register' as={NavLink} color={'green'}>
        Need an account?
      </Link>
      <SignInForm />
    </Stack>
  )
}

export default SignInPage
