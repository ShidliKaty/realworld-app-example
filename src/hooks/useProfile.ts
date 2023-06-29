import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/api-client";
import { useProfileFollowingStore } from "../store";

export const useProfile = (name: string) => {
    const setFollowing = useProfileFollowingStore(s => s.setFollowing)
    return useQuery({
    queryKey: ['profiles', name],
    queryFn: () => getProfile(name),
    onSuccess: (data) => setFollowing(data.profile.following)
})}