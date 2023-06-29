import { Button, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store'
import { useState } from 'react'
import { useFavoriteArticle } from '../hooks/useFavoriteArticle'
import { useUnfavoriteArticle } from '../hooks/useUnfavoriteArticle'

interface Props {
  slug: string
  likes: number
  isFavorited: boolean
}

export const ButtonLikes = ({ slug, likes, isFavorited }: Props) => {
  const favorite = useFavoriteArticle()
  const unfavorite = useUnfavoriteArticle()

  const [favorited, setFavorited] = useState(isFavorited)
  const [favoritesCount, setFavoritesCount] = useState(likes)

  const toggleFavorited = () => {
    if (favorited) {
      unfavorite.mutate(slug)
      setFavorited(false)
      setFavoritesCount(favoritesCount - 1)
    } else {
      favorite.mutate(slug)
      setFavorited(true)
      setFavoritesCount(favoritesCount + 1)
    }
  }
  return (
    <Button
      onClick={() => toggleFavorited()}
      variant={favorited ? 'solid' : 'outline'}
      size='xs'
      bg={favorited ? '#5CB85C' : 'transparrent'}
      color={favorited ? 'white' : '#5CB85C'}
      borderColor='#5CB85C'
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#5CB85C', color: 'white' }}
    >
      <Icon mr={1} as={AiFillHeart} />
      {favoritesCount}
    </Button>
  )
}
