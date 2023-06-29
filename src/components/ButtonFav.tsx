import { Button, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { useFavoriteStore, useUserStore } from '../store'
import { useFavoriteArticle } from '../hooks/useFavoriteArticle'
import { useUnfavoriteArticle } from '../hooks/useUnfavoriteArticle'

interface Props {
  slug: string
  size: string
}

export const ButtonFav = ({ slug, size }: Props) => {
  const favorite = useFavoriteArticle()
  const unfavorite = useUnfavoriteArticle()

  const favorited = useFavoriteStore((s) => s.favorited)
  const setFavorited = useFavoriteStore((s) => s.setFavorited)
  const favoritesCount = useFavoriteStore((s) => s.favoritesCount)
  const setFavoritesCount = useFavoriteStore((s) => s.setFavoritesCount)

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
      size={size}
      bg={favorited ? '#5CB85C' : 'transparrent'}
      color={favorited ? 'white' : '#5CB85C'}
      borderColor='#5CB85C'
      borderRadius='0.2rem'
      paddingX='0.5rem'
      _hover={{ bg: '#5CB85C', color: 'white' }}
    >
      <Icon mr={1} as={AiFillHeart} />
      {favorited ? `Unfavorite Article ${favoritesCount}` : `Favorite Article ${favoritesCount}`}
    </Button>
  )
}
