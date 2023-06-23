import { SettingsIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const ButtonSettings = () => {
  return (
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
  )
}
