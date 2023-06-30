import { Avatar, Box, Button, HStack, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'

export const CommentsForm = () => {
  return (
    <Stack justifyContent='center' alignItems='center' mb={5}>
      <Stack w='730px' borderWidth='1px' borderColor='#e5e5e5' spacing={0} borderRadius={7}>
        <Textarea
          p='20px'
          outline='none'
          fontSize='1rem'
          h='100px'
          placeholder='Write a comment...'
        ></Textarea>

        <HStack bg='#f5f5f5' px='20px' py='12px' justifyContent='space-between'>
          <Avatar w='32px' h='32px' src='' />
          <Button
            size='sm'
            bg='#5CB85C'
            color='white'
            fontWeight='700'
            fontSize='0.85rem'
            _hover={{ bg: '#4a994a' }}
          >
            Post Comment
          </Button>
        </HStack>
      </Stack>
    </Stack>
  )
}
