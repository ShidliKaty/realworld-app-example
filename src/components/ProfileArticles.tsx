import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'
import { ArticleCard } from './ArticleCard'
import { useParams } from 'react-router-dom'
import { useArticlesQueryStore } from '../store'
import { useState } from 'react'
import { PageButtons } from './PageButtons'

export const ProfileArticles = () => {
  const { name } = useParams()
  const [favorite, setFavorite] = useState(false)
  const { data, isLoading } = useArticles(!favorite ? name! : undefined)

  const username = useArticlesQueryStore((s) => s.articlesQuery.username)
  const setUsername = useArticlesQueryStore((s) => s.setUsername)
  const deleteUsername = useArticlesQueryStore((s) => s.deleteUsername)

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index: number) => {
    console.log(index)
    setTabIndex(index)
    if (index === 0) {
      setFavorite(false)
      deleteUsername()
    }
    if (index === 1) {
      setFavorite(true)
      setUsername(name!)
    }
  }

  return (
    <>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab _selected={{ color: '#5CB85C' }} color='grey'>
            My Articles
          </Tab>
          <Tab _selected={{ color: '#5CB85C' }} color='grey'>
            Favorited Articles
          </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='#5CB85C' borderRadius='1px' />
        <TabPanels>
          <TabPanel px='0'>
            {isLoading && <Text>Loading articles...</Text>}
            {data?.articles.length === 0 && <Text>No articles are here... yet.</Text>}
            {data?.articles?.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </TabPanel>
          <TabPanel px='0'>
            {isLoading && <Text>Loading articles...</Text>}
            {data?.articles.length === 0 && <Text>No articles are here... yet.</Text>}
            {username &&
              data?.articles?.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <PageButtons articlesCount={data?.articlesCount} />
    </>
  )
}
