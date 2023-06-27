import { Stack, Text } from '@chakra-ui/react'
import { ArticleCard } from './ArticleCard'
import { useArticlesFeed } from '../hooks/useArticlesFeed'
import { PageButtons } from './PageButtons'

export const MyFeedPanel = () => {
  const { data: feed, isLoading: loading, error } = useArticlesFeed()

  return (
    <Stack spacing={5}>
      {loading && <Text>Loading articles...</Text>}
      {feed?.articles.length === 0 && <Text>No articles are here... yet.</Text>}
      {feed?.articles?.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
      <PageButtons articlesCount={feed?.articlesCount} />
    </Stack>
  )
}
