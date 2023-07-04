import { Button, Text } from '@chakra-ui/react'
import { useFollowProfile } from '../hooks/useFollowProfile'
import { useUnfollowProfile } from '../hooks/useUnfollowProfile'
import { useProfileFollowingStore, useUserStore } from '../store'
import { useNavigate } from 'react-router-dom'
interface Props {
  name: string
  color: string
}

export const ButtonFollow = ({ name, color }: Props) => {
  const user = useUserStore((s) => s.user)
  const navigate = useNavigate()

  const follow = useFollowProfile()
  const unfollow = useUnfollowProfile()

  const following = useProfileFollowingStore((s) => s.following)
  const setFollowing = useProfileFollowingStore((s) => s.setFollowing)

  const toggleFollowing = () => {
    if (!user) {
      navigate('/login')
      return
    }
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
