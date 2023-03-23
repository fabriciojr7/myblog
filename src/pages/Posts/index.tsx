import { ArrowRight } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { PostProps } from '../../interfaces/PostProps';
import { api } from '../../server/api';
import { CardPost } from './styles';

export function Posts(){
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = async () => {
    try {
      const {data} = await api.get('posts');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <CardPost key={post.id}>
          <header>
            <h2>{post.title}</h2>

            <ArrowRight size={24}/>
          </header>

          <p>{post.body}</p>
        </CardPost>
      ))}
    </>
  );
}
