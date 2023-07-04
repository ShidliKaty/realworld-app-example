import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useDeleteArticle } from '../hooks/useDeleteArticle'
import { useNavigate } from 'react-router-dom'

interface Params {
  slug: string
}

export const ButtonDelete = ({ slug }: Params) => {
  const navigate = useNavigate()
  const { mutate } = useDeleteArticle()

  const onClick = () => {
    mutate(slug)
    navigate('/')
  }
  return (
    <Button
      onClick={() => onClick()}
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
