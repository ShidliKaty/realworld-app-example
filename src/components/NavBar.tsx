import { HStack, Box, Link, Image, Text, Container } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useArticlesQueryStore, useUserStore } from '../store'
import { getToken, removeToken } from '../hooks/useLocalStorage'
import { useUser } from '../hooks/useUser'
import { LoginLinks } from './LoginLinks'
import { Links } from './Links'

const NavBar = () => {
  const setArticlesQuery = useArticlesQueryStore((s) => s.setArticlesQuery)
  const token = getToken('token')
  const { user } = useUserStore()
  useUser()

  return (
    <Container minW='1110px' p='0'>
      <HStack as={'nav'} paddingY='8px' justifyContent='space-between'>
        <Box alignItems={'center'} fontSize='1.5rem' color='#5CB85C' fontWeight='bold' pb='4px'>
          <NavLink to='/' onClick={() => setArticlesQuery()}>
            conduit
          </NavLink>
        </Box>
        {user || token ? <LoginLinks /> : <Links />}
      </HStack>
    </Container>
  )
}

export default NavBar
