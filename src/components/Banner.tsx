import { Heading, Stack, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Stack
      mx='auto'
      align='center'
      spacing='0.6rem'
      bg='#5CB85C'
      color='white'
      p='2rem'
      mb='1rem'
      boxShadow='inner'
    >
      <Heading fontSize='3.5rem' textShadow='0px 1px 3px rgba(0, 0, 0, 0.3)'>
        conduit
      </Heading>
      <Text fontSize='1.5rem' fontWeight='light'>
        A place to share your knowledge.
      </Text>
    </Stack>
  )
}

export default Banner
