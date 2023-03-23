import { useContext, useEffect, useState } from 'react';
import { Eye } from '@phosphor-icons/react';
import { PostProps } from '../../interfaces/PostProps';
import { api } from '../../server/api';
import { CardPost } from './styles';
import { PostContext } from '../../contexts/PostContext';
import { useNavigate } from 'react-router-dom';

export function Posts(){
  const [posts, setPosts] = useState<PostProps[]>([]);
  const {setPost} = useContext(PostContext);
  const navigate = useNavigate();

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

  const handlePostNavigate = (post: PostProps) => {
    setPost(post);
    navigate(`/post/${post.id}`);
  };

  return (
    <>
      {posts.map((post) => (
        <CardPost
          key={post.id}
          onClick={() => handlePostNavigate(post)}
        >
          <header>
            <h2>{post.title}</h2>
            <Eye size={24}/>
          </header>

          <p>{post.body}</p>
        </CardPost>
      ))}
    </>
  );
}
