import { Button, Text } from '@chakra-ui/react'
import { useFollowProfile } from '../hooks/useFollowProfile'
interface Props {
  name: string
  color: string
  following: boolean
}

export const ButtonFollow = ({ name, color, following }: Props) => {
  const follow = useFollowProfile()

  return (
    <Button
      onClick={() => follow.mutate(name)}
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
