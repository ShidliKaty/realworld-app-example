import { Button, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'

interface Props {
  likes: number
  size: string
}

export const ButtonFav = ({ likes, size }: Props) => {
  return (
    <Button
      variant='outline'
      size={size}
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
