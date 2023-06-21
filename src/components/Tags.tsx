import { HStack, Tag } from '@chakra-ui/react'

interface Props {
  tags: string[]
}

export const Tags = ({ tags }: Props) => {
  return (
    <HStack as={'ul'} spacing={1}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          variant='outline'
          opacity={0.4}
          size='sm'
          color={'gray.700'}
          borderRadius='full'
          as={'li'}
          style={{ listStyleType: 'none' }}
        >
          {tag}
        </Tag>
      ))}
    </HStack>
  )
}
