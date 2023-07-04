import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const ButtonDelete = () => {
  return (
    <Button
      //   onClick={() => }
      variant='outline'
      size='sm'
      color='#B85C5C'
      borderColor='#B85C5C'
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#B85C5C', color: 'white' }}
    >
      <DeleteIcon mr={1} />
      Delete Article
    </Button>
  )
}
