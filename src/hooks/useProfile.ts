import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/api-client";

export const useProfile = (name: string) => useQuery({
    queryKey: ['profiles', name],
    queryFn: () => getProfile(name)
})