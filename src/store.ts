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
    login: (user: User | null) => void;
    logout: () => void;
    // isLogIn: () => boolean;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    login: (user) => set((store) => ({...store, user}) ),
    logout: () => set((store) => ({...store, user: null})),
    // isLogIn: () => !!get().user //Boolean(get().user)
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('User Store', useUserStore)