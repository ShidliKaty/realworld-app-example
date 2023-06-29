import { useMutation, useQueryClient } from '@tanstack/react-query'
import { unfollowProfile } from '../services/api-client'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useProfileFollowingStore } from '../store'

export const useUnfollowProfile = () => {
  const setFollowing = useProfileFollowingStore((s) => s.setFollowing)
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation((username: string) => unfollowProfile(username), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['follow'],
      })
      setFollowing(data.profile.following)
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        navigate('/login')
      }
      console.log(error)
    },
  })
}
