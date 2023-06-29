import { Box, Container, Text, Image, Stack, Flex, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useProfile } from '../hooks/useProfile'
import { ButtonFollow } from '../components/ButtonFollow'
import { ProfileArticles } from '../components/ProfileArticles'

const ProfilePage = () => {
  const { name } = useParams()

  const { data, isLoading, error } = useProfile(name!)

  if (isLoading)
    return (
      <Flex height={'100vh'} justifyContent='center' alignItems='center'>
        <Spinner size='xl' />
      </Flex>
    )
  if (error || !data) throw new Error()

  return (
    <>
      <Box minH='225px' bg='#f3f3f3'>
        <Container minW='920px' pt='32px' pb='16px'>
          <Stack mx={'auto'} align='center' spacing='1rem'>
            <Image objectFit='cover' boxSize='100px' borderRadius='50%' src={data.profile.image} />
            <Text fontSize='1.5rem' fontWeight='700'>
              {data.profile.username}
            </Text>
          </Stack>
          <Flex justifyContent='flex-end'>
            <ButtonFollow
              color='#999'
              name={data.profile.username}
              isFollowing={data.profile.following}
            />
          </Flex>
        </Container>
      </Box>
      <Container minW='920px' py={5} mb={10}>
        <ProfileArticles />
      </Container>
    </>
  )
}

export default ProfilePage
