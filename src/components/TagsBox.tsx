import { Box, Tag, Wrap, Text } from '@chakra-ui/react'
import { useTags } from '../hooks/useTags'
import { useArticlesQueryStore } from '../store'

export const TagsBox = () => {
  const { data, isLoading } = useTags()
  const setTag = useArticlesQueryStore((s) => s.setTag)
  return (
    <Box w='425px' bg='#f3f3f3' borderRadius='4px' px='10px' py='10px' ml={8}>
      <Text fontSize='1rem' mb='0.2rem' whiteSpace='nowrap'>
        Popular Tags
      </Text>
      <Wrap>
        {isLoading && <Text>Loading tags...</Text>}
        {data?.tags.map((tag) => (
          <Tag
            key={tag}
            onClick={() => setTag(tag)}
            as='a'
            size='sm'
            borderRadius='full'
            variant='solid'
            bgColor='#818a91'
            color='white'
            cursor='pointer'
          >
            {tag}
          </Tag>
        ))}
      </Wrap>
    </Box>
  )
}
