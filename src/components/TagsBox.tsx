import { Box, Tag, Wrap, Text } from '@chakra-ui/react'
import { useTags } from '../hooks/useTags'

export const TagsBox = () => {
  const { data, isLoading } = useTags()
  return (
    <Box w='425px' bg='gray.200' borderRadius='4px' px='10px' py='10px' ml={8}>
      <Text fontSize='1rem' mb='0.2rem' whiteSpace='nowrap'>
        Popular Tags
      </Text>
      <Wrap>
        {isLoading && <Text>Loading tags...</Text>}
        {data?.tags.map((tag) => (
          <Tag key={tag} size='sm' borderRadius='full' variant='solid' colorScheme='gray'>
            {tag}
          </Tag>
        ))}
      </Wrap>
    </Box>
  )
}
