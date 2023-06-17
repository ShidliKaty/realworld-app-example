import { Avatar, Box, Button, Flex, HStack, Heading, Icon, Tag, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { Article } from '../entities/Articles'
import { I18nSettings, format } from 'fecha'

type format = (date: Date, format?: string, i18n?: I18nSettings) => string

interface Props {
  article: Article
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <Box mx='-5' borderBottomWidth={2}>
      <HStack justifyContent='space-between' my={3}>
        <Flex>
          <Avatar w='32px' h='32px' src={article.author.image} />
          <Box ml='3'>
            <Text fontSize='1rem' lineHeight={0.9} fontWeight='bold' color='#5CB85C'>
              {article.author.username}
            </Text>
            <Text fontSize='0.8rem' color='gray.400'>
              {format(new Date(`${article.createdAt}`), 'MMMM D, YYYY')}
            </Text>
          </Box>
        </Flex>
        <Button
          size='xs'
          bg='#5CB85C'
          color='white'
          _hover={{
            bg: 'green',
          }}
        >
          <Icon mr={1} as={AiFillHeart} />
          {article.favoritesCount}
        </Button>
      </HStack>
      <Link to={'/'}>
        <Heading fontSize='1.5rem'>{article.title}</Heading>
        <Text color='gray'>{article.description}</Text>
        <HStack justifyContent='space-between' my={4}>
          <Box as={'span'} fontSize='0.8rem' color='gray.400'>
            Read more...
          </Box>
          <HStack as={'ul'}>
            {article.tagList.map((tag) => (
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
        </HStack>
      </Link>
    </Box>
  )
}
