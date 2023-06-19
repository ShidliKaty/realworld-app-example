import { ButtonGroup, Button } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'
import { useArticlesQueryStore } from '../store'

interface Props {
  onChangePage: (pageNumber: number) => void
}

export const PageButtons = () => {
  const { data } = useArticles()

  const setPage = useArticlesQueryStore((s) => s.setPage)

  const pages = data?.articlesCount ? Math.ceil(data?.articlesCount / 10) : 0

  const list = Array.from({ length: pages }).map((v, i) => i + 1)

  return (
    <ButtonGroup variant='outline' size='xs'>
      {list.map((i) => (
        <Button
          as={'button'}
          onClick={() => setPage(i)}
          value={i}
          color='#5CB85C'
          _focus={{ bg: '#5CB85C', color: 'white' }}
          key={i}
        >
          {i}
        </Button>
      ))}
    </ButtonGroup>
  )
}
