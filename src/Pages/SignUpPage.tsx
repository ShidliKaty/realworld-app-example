import { Stack, Heading, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
  return (
    <Stack spacing={4} mx={'auto'} my={'24px'} minW={'540px'} align={'center'} minH='100vh'>
      <Heading lineHeight={0.6} fontSize={'2.5rem'} mt={'24px'}>
        Sign up
      </Heading>

      <Link to='/login' as={NavLink} color={'green'}>
        Have an account?
      </Link>
      <SignUpForm />
    </Stack>
  )
}

export default SignUpPage
