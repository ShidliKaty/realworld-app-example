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
  Box,
} from '@chakra-ui/react'
import { ArticleCard } from '../components/ArticleCard'
import { Banner } from '../components/Banner'
import { useState } from 'react'
import { TagsBox } from '../components/TagsBox'
import { useArticles } from '../hooks/useArticles'
import { PageButtons } from '../components/PageButtons'

const HomePage = () => {
  const { data, isLoading } = useArticles()
  console.log(data)
  const [tabs, setTabs] = useState(['Global Feed'])

  return (
    <>
      <Banner />
      <Container minW='1110px'>
        <HStack spacing={8} alignItems='flex-start' pt={5}>
          <Box mb={10}>
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
            <PageButtons />
          </Box>
          <TagsBox />
        </HStack>
      </Container>
    </>
  )
}

export default HomePage
