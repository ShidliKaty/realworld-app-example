import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { ArticleCard } from './ArticleCard'
import { useArticles } from '../hooks/useArticles'

export const ArticlesList = () => {
  const { data, isLoading } = useArticles()
  const [tabs, setTabs] = useState(['Global Feed'])
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab} _selected={{ color: '#5CB85C' }} color='grey'>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#5CB85C' borderRadius='1px' />
      <TabPanels>
        <TabPanel w='825px'>
          {isLoading && <Text>Loading articles...</Text>}
          {data?.articles?.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
