import { Avatar, Box, Button, Flex, HStack, Heading, Tag, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ArticleCard = () => {
  return (
    <Box mx='-5' borderBottomWidth={2}>
      <HStack justifyContent='space-between' my={3}>
        <Flex>
          <Avatar w='32px' h='32px' src='' />
          <Box ml='3'>
            <Text fontSize='1rem' lineHeight={0.9} fontWeight='bold' color='green'>
              Name Surname
            </Text>
            <Text fontSize='0.8rem' color='gray.400'>
              December 9, 2023
            </Text>
          </Box>
        </Flex>
        <Button size='sm' bg='green' color='white'>
          0
        </Button>
      </HStack>
      <Link to={'/'}>
        <Heading fontSize='1.5rem'>Heading</Heading>
        <Text color='gray'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, dolorum assumenda
          porro minima nemo in sunt quasi aliquid, odio quis sequi. Ipsam in quo impedit qui maiores
          temporibus dolorum amet!
        </Text>
        <HStack justifyContent='space-between' my={4}>
          <Box as={'span'} fontSize='0.8rem' color='gray.400'>
            Read more...
          </Box>
          <Box as={'ul'}>
            <Tag
              variant='outline'
              opacity={0.4}
              size='sm'
              color={'gray.700'}
              borderRadius='full'
              as={'li'}
              style={{ listStyleType: 'none' }}
            >
              Lorem
            </Tag>
          </Box>
        </HStack>
      </Link>
    </Box>
  )
}
