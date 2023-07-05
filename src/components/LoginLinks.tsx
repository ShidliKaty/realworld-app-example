import { EditIcon, SettingsIcon } from '@chakra-ui/icons'
import { HStack, Link, Text, Avatar } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { removeToken } from '../hooks/useLocalStorage'
import { useArticlesQueryStore, useUserStore } from '../store'

export const LoginLinks = () => {
  const { user, deleteUser } = useUserStore()
  const setArticlesQuery = useArticlesQueryStore((s) => s.setArticlesQuery)

  const logout = () => {
    deleteUser()
    removeToken('token')
  }

  return (
    <HStack as='ul' spacing={4} alignItems={'center'} mx='auto'>
      <li style={{ listStyleType: 'none' }}>
        <Link
          as={NavLink}
          onClick={() => setArticlesQuery()}
          to='/'
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
          to='/editor'
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          <EditIcon mx={1} mb={1} />
          New Article
        </Link>
      </li>
      <li style={{ listStyleType: 'none' }}>
        <Link
          to='/settings'
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          <SettingsIcon mx={1} mb={1} />
          Settings
        </Link>
      </li>
      <li style={{ listStyleType: 'none' }}>
        <Link
          onClick={() => setArticlesQuery()}
          to={'/' + user?.username}
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          <HStack>
            <Avatar objectFit='cover' boxSize='26px' borderRadius='50%' src={user?.image} />
            <Text>Profile</Text>
          </HStack>
        </Link>
      </li>
      <li style={{ listStyleType: 'none' }}>
        <Link
          onClick={() => logout()}
          to='/login'
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          Log Out
        </Link>
      </li>
    </HStack>
  )
}
