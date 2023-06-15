import { mountStoreDevtool } from 'simple-zustand-devtools';
import {create} from 'zustand'

interface User {
    email?: string;
    username?: string;
    bio?: string;
    image?: string;   
}

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void;
    deleteUser: () => void;
    // isLogIn: () => boolean;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set((store) => ({...store, user}) ),
    deleteUser: () => set((store) => ({...store, user: null})),
    // isLogIn: () => !!get().user //Boolean(get().user)
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('User Store', useUserStore)