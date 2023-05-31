import { HStack, Box, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack as={'nav'} padding='8px' justifyContent='space-between'>
      <Box alignItems={'center'} fontSize={25} color='green' fontWeight='bold'>
        conduit
      </Box>
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
          Sign In
        </Link>
        <Link
          to='/register'
          as={NavLink}
          color='gray.500'
          _activeLink={{ fontWeight: 'bold', color: 'gray.700' }}
          _hover={{ textDecoration: 'none' }}
        >
          Sign Up
        </Link>
      </HStack>
    </HStack>
  )
}

export default NavBar
