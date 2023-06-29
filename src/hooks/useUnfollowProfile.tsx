import { useMutation, useQueryClient } from '@tanstack/react-query'
import { unfollowProfile } from '../services/api-client'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useUnfollowProfile = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation((username: string) => unfollowProfile(username), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['follow'],
      })
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        navigate('/login')
      }
      console.log(error)
    },
  })
}
