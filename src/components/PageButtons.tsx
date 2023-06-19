import { ButtonGroup } from '@chakra-ui/react'
import { useArticles } from '../hooks/useArticles'
import { useArticlesQueryStore } from '../store'
import './PageButtons.css'

export const PageButtons = () => {
  const { data } = useArticles()

  const setPage = useArticlesQueryStore((s) => s.setPage)
  const page = useArticlesQueryStore((s) => s.articlesQuery.page)

  const pages = data?.articlesCount ? Math.ceil(data?.articlesCount / 10) : 0

  const list = Array.from({ length: pages }).map((v, i) => i + 1)

  return (
    <ButtonGroup variant='outline' size='xs'>
      {list.map((i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          value={i}
          className={page === i ? ' btn active' : 'btn'}
        >
          {i}
        </button>
      ))}
    </ButtonGroup>
  )
}
