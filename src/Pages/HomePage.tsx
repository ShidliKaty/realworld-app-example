import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  HStack,
} from '@chakra-ui/react'
import { ArticleCard } from '../components/ArticleCard'
import Banner from '../components/Banner'
import { useState } from 'react'
import { TagsBox } from '../components/TagsBox'

const HomePage = () => {
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
              <TabPanel>
                <ArticleCard />
              </TabPanel>
              <TabPanel>
                <ArticleCard />
              </TabPanel>
              <TabPanel>
                <ArticleCard />
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
