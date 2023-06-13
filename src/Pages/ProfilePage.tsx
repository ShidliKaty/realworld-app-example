import { SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Text,
  Image,
  Stack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'

const ProfilePage = () => {
  return (
    <>
      <Box minH='225px' bg='#f3f3f3'>
        <Container minW='920px' pt='32px' pb='16px'>
          <Stack mx={'auto'} align='center' spacing='1rem'>
            <Image objectFit='cover' boxSize='100px' borderRadius='50%' />
            <Text fontSize='1.5rem' fontWeight='700'>
              Name
            </Text>
          </Stack>
          <Button
            variant='outline'
            size='sm'
            borderColor='#999'
            as={NavLink}
            to='/settings'
            float={'right'}
            color='#999'
            fontSize='0.87rem'
          >
            <SettingsIcon mr={1} />
            Edit Profile Settings
          </Button>
        </Container>
      </Box>
      <Container minW='920px'>
        <Tabs pt={5}>
          <TabList>
            <Tab _selected={{ color: 'green' }} color='grey'>
              My Articles
            </Tab>
            <Tab _selected={{ color: 'green' }} color='grey'>
              Favorited Articles
            </Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
          <TabPanels>
            <TabPanel>
              <ArticleCard />
            </TabPanel>
            <TabPanel>
              <ArticleCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  )
}

export default ProfilePage
