import { ButtonGroup, Button } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'

export const PageButtons = () => {
  const { data } = useArticles()
  const pages = data?.articlesCount ? Math.ceil(data?.articlesCount / 10) : 0
  const list = Array.from({ length: pages })
    .map((v, i) => i + 1)
    .slice(1)

  console.log(list)
  return (
    <ButtonGroup variant='outline' size='xs'>
      <Button
        color='#5CB85C'
        _focus={{ bg: '#5CB85C', color: 'white', boxShadow: 'none' }}
        autoFocus
      >
        1
      </Button>
      {list
        ? list.map((i) => (
            <Button color='#5CB85C' _focus={{ bg: '#5CB85C', color: 'white' }} key={i}>
              {i}
            </Button>
          ))
        : null}
    </ButtonGroup>
  )
}
