import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  HStack,
  Text,
} from '@chakra-ui/react'
import { ArticleCard } from '../components/ArticleCard'
import Banner from '../components/Banner'
import { useState } from 'react'
import { TagsBox } from '../components/TagsBox'
import { useArticles } from '../hooks/useArticles'

const HomePage = () => {
  const { data, isLoading } = useArticles()
  console.log(data)
  const [tabs, setTabs] = useState(['Global Feed'])
  return (
    <>
      <Banner />
      <Container minW='1110px'>
        <HStack spacing={8} alignItems='flex-start' pt={5}>
          <Tabs>
            <TabList>
              {tabs.map((tab) => (
                <Tab key={tab} _selected={{ color: 'green' }} color='grey'>
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
            <TabPanels>
              <TabPanel w='825px'>
                {isLoading && <Text>Loading articles...</Text>}
                {data?.articles?.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <TagsBox />
        </HStack>
      </Container>
    </>
  )
}

export default HomePage
