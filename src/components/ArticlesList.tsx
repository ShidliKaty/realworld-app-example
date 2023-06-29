import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useArticlesQueryStore, useUserStore } from '../store'
import { getToken } from '../hooks/useLocalStorage'
import { useState } from 'react'
import { GlobalFeedPanel } from './GlobalFeedPanel'
import { MyFeedPanel } from './MyFeedPanel'
import { TagPanel } from './TagPanel'

export const ArticlesList = () => {
  const tag = useArticlesQueryStore((s) => s.articlesQuery.tag)
  const deleteTag = useArticlesQueryStore((s) => s.deleteTag)

  const token = getToken('token')
  const { user } = useUserStore()

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
    if ((index === 0 || index === 1) && tag) {
      return deleteTag()
    }
  }

  const getIndex = () => {
    if (user && tag) {
      return 2
    }
    if (!user && tag) {
      return 1
    }
    return tabIndex
  }

  return (
    <>
      <Tabs
        index={getIndex()}
        onChange={handleTabsChange}
        lazyBehavior='unmount'
        isManual={true}
        isLazy
      >
        <TabList>
          {user || token ? (
            <Tab _selected={{ color: '#5CB85C' }} color='grey'>
              My Feed
            </Tab>
          ) : null}
          <Tab _selected={{ color: '#5CB85C' }} color='grey'>
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
          {user || token ? (
            <TabPanel w='825px' px='0'>
              <MyFeedPanel />
            </TabPanel>
          ) : null}
          <TabPanel w='825px' px='0'>
            <GlobalFeedPanel />
          </TabPanel>
          <TabPanel w='825px' px='0'>
            {tag && <TagPanel />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
