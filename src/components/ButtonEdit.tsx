import { EditIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface Props {
  slug: string
}

export const ButtonEdit = ({ slug }: Props) => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate('/editor/' + slug)}
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
