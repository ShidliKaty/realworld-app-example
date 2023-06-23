import { Button, Text } from '@chakra-ui/react'

interface Props {
  name: string
  color: string
}

export const ButtonFollow = ({ name, color }: Props) => {
  return (
    <Button
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
      Follow {name}
    </Button>
  )
}
