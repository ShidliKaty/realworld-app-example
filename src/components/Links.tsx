import { HStack, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useArticlesQueryStore } from '../store'

export const Links = () => {
  const setArticlesQuery = useArticlesQueryStore((s) => s.setArticlesQuery)
  return (
    <HStack as={'ul'} spacing={4} alignItems={'center'} mx='auto'>
      <li style={{ listStyleType: 'none' }}>
        <Link
          as={NavLink}
          to='/'
          onClick={() => setArticlesQuery()}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          Home
        </Link>
      </li>
      <li style={{ listStyleType: 'none' }}>
        <Link
          as={NavLink}
          to='/login'
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          Sign in
        </Link>
      </li>
      <li style={{ listStyleType: 'none' }}>
        <Link
          to='/register'
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          Sign up
        </Link>
      </li>
    </HStack>
  )
}
