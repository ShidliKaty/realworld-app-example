import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'
import { ArticleCard } from './ArticleCard'
import { useParams } from 'react-router-dom'
import { useArticlesQueryStore } from '../store'
import { useState } from 'react'

export const ProfileArticles = () => {
  const { name } = useParams()
  const [favorite, setFavorite] = useState(false)
  const { data, isLoading } = useArticles(!favorite ? name! : undefined)

  const username = useArticlesQueryStore((s) => s.articlesQuery.username)
  const setUsername = useArticlesQueryStore((s) => s.setUsername)
  const deleteUsername = useArticlesQueryStore((s) => s.deleteUsername)

  const onFavorite = () => {
    setFavorite(true)
    setUsername(name!)
  }
  const onMyArticles = () => {
    setFavorite(false)
    deleteUsername()
  }

  return (
    <Tabs>
      <TabList>
        <Tab _selected={{ color: '#5CB85C' }} color='grey' onClick={() => onMyArticles()}>
          My Articles
        </Tab>
        <Tab _selected={{ color: '#5CB85C' }} color='grey' onClick={() => onFavorite()}>
          Favorited Articles
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#5CB85C' borderRadius='1px' />
      <TabPanels>
        <TabPanel>
          {isLoading && <Text>Loading articles...</Text>}
          {data?.articles.length === 0 && <Text>No articles are here... yet.</Text>}
          {data?.articles?.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </TabPanel>
        <TabPanel>
          {isLoading && <Text>Loading articles...</Text>}
          {data?.articles.length === 0 && <Text>No articles are here... yet.</Text>}
          {username &&
            data?.articles?.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
