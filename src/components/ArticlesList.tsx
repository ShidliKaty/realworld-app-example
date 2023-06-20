import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { ArticleCard } from './ArticleCard'
import { useArticles } from '../hooks/useArticles'
import { useArticlesQueryStore } from '../store'

export const ArticlesList = () => {
  const tag = useArticlesQueryStore((s) => s.articlesQuery.tag)
  const deleteTag = useArticlesQueryStore((s) => s.deleteTag)
  const { data, isLoading } = useArticles()

  return (
    <Tabs index={tag ? 1 : 0}>
      <TabList>
        <Tab _selected={{ color: '#5CB85C' }} color='grey' onClick={() => deleteTag()}>
          Global Feed
        </Tab>

        {tag && (
          <Tab _selected={{ color: '#5CB85C' }} color='grey'>
            <Text fontSize='xl' fontWeight='bold' mr={1}>
              #
            </Text>
            {tag}
          </Tab>
        )}
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#5CB85C' borderRadius='1px' />
      <TabPanels>
        <TabPanel w='825px'>
          {isLoading && <Text>Loading articles...</Text>}
          {data?.articles?.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </TabPanel>
        {tag && (
          <TabPanel w='825px'>
            {isLoading && <Text>Loading articles...</Text>}
            {data?.articles?.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  )
}
