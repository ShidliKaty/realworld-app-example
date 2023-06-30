import { Link, Text } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

export const SignInText = () => {
  return (
    <Text textAlign='center' mb={5}>
      <Link as={RouteLink} to='/login' color='#5CB85C'>
        Sign in
      </Link>{' '}
      or{' '}
      <Link as={RouteLink} to='/register' color='#5CB85C'>
        sign up
      </Link>{' '}
      to add comments on this article.
    </Text>
  )
}
