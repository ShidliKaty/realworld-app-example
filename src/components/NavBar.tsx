import { HStack, Box, Link, Image, Text, Container } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EditIcon, SettingsIcon } from '@chakra-ui/icons'
import { useUserStore } from '../store'
import { removeToken } from '../hooks/useLocalStorage'

const LoginLinks = () => {
  const { user, deleteUser } = useUserStore()

  const logout = () => {
    deleteUser()
    removeToken('token')
  }

  return (
    <HStack spacing={4} alignItems={'center'} mx='auto'>
      <li style={{ listStyleType: 'none' }}>
        <Link
          as={NavLink}
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
          to='/user'
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          <HStack>
            <Image objectFit='cover' boxSize='26px' borderRadius='50%' src={user?.image} />
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

const Links = () => {
  return (
    <HStack as={'ul'} spacing={4} alignItems={'center'} mx='auto'>
      <li style={{ listStyleType: 'none' }}>
        <Link
          as={NavLink}
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

const NavBar = () => {
  const user = useUserStore((s) => s.user)
  return (
    <Container minW='1110px'>
      <HStack as={'nav'} py='8px' justifyContent='space-between'>
        <Box alignItems={'center'} fontSize={25} color='green' fontWeight='bold'>
          conduit
        </Box>
        {user ? <LoginLinks /> : <Links />}
      </HStack>
    </Container>
  )
}

export default NavBar
