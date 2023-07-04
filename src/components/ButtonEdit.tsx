import { EditIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const ButtonEdit = () => {
  return (
    <Button
      //   onClick={() => }
      variant='outline'
      size='sm'
      color='#ccc'
      borderColor='#ccc'
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#bbb', color: 'white' }}
    >
      <EditIcon mr={1} />
      Edit Article
    </Button>
  )
}
