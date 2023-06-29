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
    username?: string,
}

interface ArticlesQueryStore {
    articlesQuery: ArticlesQuery;
    pagesCount: number;
    setPagesCount: (articlesCount: number) => void;
    setArticlesQuery: () => void;
    setPage: (page: number) => void;
    setTag: (tag: string) => void;
    deleteTag: () => void;
    setUsername: (username: string) => void;
    deleteUsername: () => void;
}

export const useArticlesQueryStore = create<ArticlesQueryStore>((set) => ({
    articlesQuery: {
        page: 1,
        limit: 10,
    },
    pagesCount: 0,
    setArticlesQuery: () => set(() => ({articlesQuery: {page:1 , limit: 10}})),
    setPagesCount: (pagesCount) => set((store) => ({...store, pagesCount})),
    setPage: (page) => set((store) => ({articlesQuery: {...store.articlesQuery, page}})),
    setTag: (tag) => set(() => ({articlesQuery: {page: 1, limit: 10, tag}})),
    deleteTag: () => set(() => ({articlesQuery: {page: 1, limit: 10}})),
    setUsername: (username) => set(({articlesQuery: {page: 1, limit: 10, username}})),
    deleteUsername: () => set(() => ({articlesQuery: {page: 1, limit: 10}}))
})) 

export interface ArticlesFeedQuery {
    page: number,
    limit: number,
}

interface ArticlesFeedQueryStore {
    articlesFeedQuery: ArticlesFeedQuery;
    setPage: (page: number) => void;
}
export const useArticlesFeedQueryStore = create<ArticlesFeedQueryStore>((set) => ({
    articlesFeedQuery: {
        page: 1,
        limit: 10,
    },
    setPage: (page) => set((store) => ({articlesFeedQuery: {...store.articlesFeedQuery, page}})),
}))

interface ProfileFollowingStore {
    following: boolean,
    setFollowing: (following: boolean) => void
}

export const useProfileFollowingStore = create<ProfileFollowingStore>((set) => ({
    following: true,
    setFollowing: (following) => set(() => ({following}))
}))

interface FavoriteStore {
    favorited: boolean,
    favoritesCount: number,
    setFavorited: (favorited: boolean) => void,
    setFavoritesCount: (likes: number) => void
}

export const useFavoriteStore = create<FavoriteStore>(set => ({
    favorited: true,
    favoritesCount: 0,
    setFavorited: (favorited) => set(() => ({favorited})),
    setFavoritesCount: (likes: number) => set(() => ({favoritesCount: likes}))
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('User Store', useUserStore)

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('Articles Store', useArticlesQueryStore)