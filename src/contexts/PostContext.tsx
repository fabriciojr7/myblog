/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react';
import { PostProps } from '../interfaces/PostProps';

interface PostContextProps {
  post: PostProps | null
  setPost: (post: PostProps) => void
}

const initialState: PostContextProps = {
  post: null,
  setPost(){}
};

export const PostContext = createContext<PostContextProps>(initialState);

interface PostContextProviderProps{
  children: ReactNode
}

export function PostContextProvider({children}: PostContextProviderProps){
  const [post, setPost] = useState<PostProps | null>(null);

  return (
    <PostContext.Provider value={{
      post,
      setPost
    }}>
      {children}
    </PostContext.Provider>
  );
}


