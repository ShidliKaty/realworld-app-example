import { Button, Text } from '@chakra-ui/react'
import { useFollowProfile } from '../hooks/useFollowProfile'
import { useUnfollowProfile } from '../hooks/useUnfollowProfile'
import { useState } from 'react'
interface Props {
  name: string
  color: string
  isFollowing: boolean
}

export const ButtonFollow = ({ name, color, isFollowing }: Props) => {
  const follow = useFollowProfile()
  const unfollow = useUnfollowProfile()

  const [following, setFollowing] = useState(isFollowing)

  const toggleFollowing = () => {
    if (following) {
      unfollow.mutate(name)
      setFollowing(false)
    } else {
      follow.mutate(name)
      setFollowing(true)
    }
  }
  return (
    <Button
      onClick={() => toggleFollowing()}
      variant='outline'
      size='sm'
      color={color}
      borderColor={color}
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#bbb', color: 'white' }}
    >
      <Text fontSize='1.2rem' mr={2} textAlign='center' pb='2px'>
        +
      </Text>
      {following ? `Unfollow ${name}` : `Follow ${name}`}
    </Button>
  )
}
