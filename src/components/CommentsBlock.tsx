import React from 'react'
import { SignInText } from './SignInText'
import { CommentsList } from './CommentsList'
import { CommentsForm } from './CommentsForm'

export const CommentsBlock = () => {
  return (
    <>
      <SignInText />
      <CommentsForm />
      <CommentsList />
    </>
  )
}
