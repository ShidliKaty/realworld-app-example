import { Button, Heading, Input, Stack, Textarea } from '@chakra-ui/react'

const SettingsPage = () => {
  return (
    <Stack spacing={4} mx={'auto'} my={'24px'} w={'540px'} align={'center'} minH='100vh'>
      <Heading>Your Settings</Heading>
      <Stack as={'form'} spacing={4} alignItems={'flex-end'} minW='100%'>
        <Input
          id='url'
          size={'lg'}
          type='text'
          placeholder='URL of profile picture'
          defaultValue={'jjjj'}
        />
        <Input id='name' size={'lg'} type='text' placeholder='Username' defaultValue={'Name'} />
        <Textarea id='bio' size={'lg'} placeholder='Short bio about you' h='200px' />
        <Input id='email' size={'lg'} type='text' placeholder='Email' defaultValue={'email'} />
        <Input id='password' size={'lg'} type='password' placeholder='New Password' />
        <Button
          type={'submit'}
          bg={'green'}
          color='white'
          size='lg'
          _hover={{
            bg: 'green.500',
          }}
        >
          Update Settings
        </Button>
      </Stack>
    </Stack>
  )
}

export default SettingsPage
