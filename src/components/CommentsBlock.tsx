import { SignInText } from './SignInText'
import { CommentsList } from './CommentsList'
import { CommentsForm } from './CommentsForm'
import { useUserStore } from '../store'

export const CommentsBlock = () => {
  const user = useUserStore((s) => s.user)
  return (
    <>
      {!user ? <SignInText /> : null}
      <CommentsForm />
      <CommentsList />
    </>
  )
}
