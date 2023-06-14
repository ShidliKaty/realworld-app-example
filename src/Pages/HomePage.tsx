import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Text,
  HStack,
  Box,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { ArticleCard } from '../components/ArticleCard'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Container minW='1110px'>
        <HStack spacing={8} alignItems='flex-start' pt={5}>
          <Tabs>
            <TabList>
              <Tab _selected={{ color: 'green' }} color='grey'>
                My Feed
              </Tab>
              <Tab _selected={{ color: 'green' }} color='grey'>
                Global Feed
              </Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
            <TabPanels>
              <TabPanel>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </TabPanel>
              <TabPanel>
                <ArticleCard />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box minW='225px' bg='gray.200' borderRadius='4px' px='10px' py='10px' ml={8}>
            <Text fontSize='1rem' mb='0.2rem' whiteSpace='nowrap'>
              Popular Tags
            </Text>
            <Wrap>
              <Tag size='sm' borderRadius='full' variant='solid' colorScheme='gray'>
                Lorem
              </Tag>
              <Tag size='sm' borderRadius='full' variant='solid' colorScheme='gray'>
                Lorem
              </Tag>
              <Tag size='sm' borderRadius='full' variant='solid' colorScheme='gray'>
                Loremjhbjh
              </Tag>
            </Wrap>
          </Box>
        </HStack>
      </Container>
    </>
  )
}

export default HomePage
