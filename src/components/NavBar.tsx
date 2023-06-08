import { HStack, Box, Link, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EditIcon, SettingsIcon } from '@chakra-ui/icons'
import { useUserStore } from '../store'

const LoginLinks = () => {
  const { user, logout } = useUserStore()
  return (
    <HStack spacing={4} alignItems={'center'} mx='auto'>
      <Link
        as={NavLink}
        to='/'
        color='gray.500'
        _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
        _hover={{ textDecoration: 'none' }}
      >
        Home
      </Link>

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
    </HStack>
  )
}

const Links = () => {
  return (
    <HStack spacing={4} alignItems={'center'} mx='auto'>
      <Link
        as={NavLink}
        to='/'
        color='gray.500'
        _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
        _hover={{ textDecoration: 'none' }}
      >
        Home
      </Link>
      <Link
        as={NavLink}
        to='/login'
        color='gray.500'
        _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
        _hover={{ textDecoration: 'none' }}
      >
        Sign in
      </Link>
      <Link
        to='/register'
        as={NavLink}
        color='gray.500'
        _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
        _hover={{ textDecoration: 'none' }}
      >
        Sign up
      </Link>
    </HStack>
  )
}

const NavBar = () => {
  const user = useUserStore((s) => s.user)
  return (
    <HStack as={'nav'} padding='8px' justifyContent='space-between'>
      <Box alignItems={'center'} fontSize={25} color='green' fontWeight='bold'>
        conduit
      </Box>
      {user ? <LoginLinks /> : <Links />}
    </HStack>
  )
}

export default NavBar
