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
    
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set((store) => ({...store, user}) ),
    deleteUser: () => set((store) => ({...store, user: null})),
}))

export interface ArticlesQuery {
    page: number,
    limit: number,
    tag?: string,
}

interface ArticlesQueryStore {
    articlesQuery: ArticlesQuery;
    pagesCount: number;
    setPagesCount: (articlesCount: number) => void;
    setPage: (page: number) => void;
    setTag: (tag: string) => void;
    deleteTag: () => void;
}

export const useArticlesQueryStore = create<ArticlesQueryStore>((set) => ({
    articlesQuery: {
        page: 1,
        limit: 10,
    },
    pagesCount: 0,
    setPagesCount: (pagesCount) => set((store) => ({...store, pagesCount})),
    setPage: (page) => set((store) => ({articlesQuery: {...store.articlesQuery, page}})),
    setTag: (tag) => set(() => ({articlesQuery: {page: 1, limit: 10, tag}})),
    deleteTag: () => set((store) => ({articlesQuery: {page: 1, limit: 10}}))
})) 

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('User Store', useUserStore)

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('Articles Store', useArticlesQueryStore)