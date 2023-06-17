import { HStack, Box, Link, Image, Text, Container } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EditIcon, SettingsIcon } from '@chakra-ui/icons'
import { useUserStore } from '../store'
import { getToken, removeToken } from '../hooks/useLocalStorage'
import { useUser } from '../hooks/useUser'
import { UserResponse } from '../entities/UserResponses'
import { LoginLinks } from './LoginLinks'
import { Links } from './Links'
import { useEffect } from 'react'

const NavBar = () => {
  const token = getToken('token')
  const { user } = useUserStore()
  useUser()

  return (
    <Container minW='1110px'>
      <HStack as={'nav'} py='8px' justifyContent='space-between'>
        <Box alignItems={'center'} fontSize={25} color='#5CB85C' fontWeight='bold'>
          <NavLink to={'/'}>conduit</NavLink>
        </Box>
        {/* {isLoading && null} */}
        {user || token ? <LoginLinks /> : <Links />}
      </HStack>
    </Container>
  )
}

export default NavBar
