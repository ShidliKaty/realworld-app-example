import { Button, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store'

interface Props {
  likes: number
}

export const ButtonLikes = ({ likes }: Props) => {
  const { user } = useUserStore()
  const navigate = useNavigate()

  return (
    <Button
      //   onClick={() => onFavorite()}
      variant='outline'
      size='xs'
      color='#5CB85C'
      borderColor='#5CB85C'
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#5CB85C', color: 'white' }}
    >
      <Icon mr={1} as={AiFillHeart} />
      {likes}
    </Button>
  )
}
