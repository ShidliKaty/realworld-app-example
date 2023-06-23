import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'
import { ArticleCard } from './ArticleCard'
import { useParams } from 'react-router-dom'

export const ProfileArticles = () => {
  const { name } = useParams()
  const { data, isLoading } = useArticles(name!)

  return (
    <Tabs>
      <TabList>
        <Tab _selected={{ color: '#5CB85C' }} color='grey'>
          My Articles
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#5CB85C' borderRadius='1px' />
      <TabPanels>
        <TabPanel>
          {isLoading && <Text>Loading articles...</Text>}
          {data?.articles?.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
