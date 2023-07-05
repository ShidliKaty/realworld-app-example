import { Stack, Text } from '@chakra-ui/react'
import { ArticleCard } from './ArticleCard'
import { useArticles } from '../hooks/useArticles'
import { PageButtons } from './PageButtons'

export const TagPanel = () => {
  const { data, isLoading } = useArticles()

  return (
    <Stack spacing={5}>
      {isLoading && <Text>Loading articles...</Text>}
      {data?.articles?.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
      <PageButtons articlesCount={data?.articlesCount} />
    </Stack>
  )
}
