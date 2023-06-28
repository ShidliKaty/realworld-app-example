import axios from "axios";
import { getToken } from "../hooks/useLocalStorage";
import { UserResponse } from "../entities/UserResponses";
import { Tags } from "../entities/Tags";
import { ArticleResponse, Articles } from "../entities/Articles";
import { ArticlesFeedQuery, ArticlesQuery } from "../store";
import { ProfileResponse } from "../entities/Profile";
import { Comments } from "../entities/Comments";



const client = axios.create({ baseURL: 'https://api.realworld.io/api' });



const SESSION_EXPIRED_STATUS_CODE = 401;

export const getUser = async () => {
    client.defaults.headers.common['Authorization'] = `Token ${getToken('token')}`
   
    const response = await client.get<UserResponse>('user');
    return response.data;
  
}
export const getTags = async () => {
    const response = await client.get<Tags>('tags');
    return response.data;
  };

export const getArticles = async (query: ArticlesQuery, username?: string) => {
    const response = await client.get<Articles>('articles', {
      params: {
        offset: (query.page - 1) * query.limit,
        limit: query.limit,
        tag: query.tag,
        author: username,
        favorited: query.username
      }
    });
    return response.data;
  };

  export const getArticle = async (slug: string) => {
    const response = await client.get<ArticleResponse>('articles/' + slug, {
      params: {
        slug: slug
      }
    });
    return response.data;
  }

  export const getArticlesFeed = async (query: ArticlesFeedQuery) => {
    client.defaults.headers.common['Authorization'] = `Token ${getToken('token')}`
    const response = await client.get<Articles>('articles/feed', {
      params: {
        offset: (query.page - 1) * query.limit,
        limit: query.limit,
      }
    });
    return response.data;
  };

  export const getProfile = async (name: string) => {
    const response = await client.get<ProfileResponse>('profiles/' + name, {
      params: {
        username: name
      }
    });
    return response.data;
  }

  export const getComments = async (slug: string) => {
    const response = await client.get<Comments>('articles/' + slug + '/comments', {
      params: {
        slug: slug
      }
  });
  return response.data;
}

export const followProfile = async (username: string) => {
  client.defaults.headers.common['Authorization'] = `Token ${getToken('token')}`
  const response = await client.post<ProfileResponse>('profiles/' + username + '/follow', null, {
    params: {
      username
    }
  });
  return response.data;
}