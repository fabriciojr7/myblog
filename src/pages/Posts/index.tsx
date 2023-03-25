import { useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { PostProps } from '../../interfaces/PostProps';
import { api } from '../../server/api';
import { PostContext } from '../../contexts/PostContext';
import { useNavigate } from 'react-router-dom';
import { CardPost, LoadMore } from './styles';
import { Error } from '../../components/Error';

export function Posts(){
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [error,setError] = useState(false);
  const {setPost} = useContext(PostContext);
  const navigate = useNavigate();
  const totalPage = useRef(0);
  const [currentPage, setCurrentPage] = useState(1);
  const isloading = useRef(false);

  const loadPosts = async () => {
    try {
      isloading.current = true;

      const {data, headers} = await api.get('posts', {
        params: {
          _limit: 10,
          _page: currentPage
        }
      });

      totalPage.current = Math.ceil(headers['x-total-count'] / 10);

      setPosts((prevState) => [...prevState, ...data]);
    } catch (error) {
      console.log(error);
      setError(true);
    }finally{
      isloading.current = false;
    }
  };

  useEffect(() => {
    if(!isloading.current){
      loadPosts();
    }

  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const handlePostNavigate = (post: PostProps) => {
    setPost(post);
    navigate(`/post/${post.id}`);
  };

  return (
    <>
      {error && <Error/>}

      {!error && (
        <>
          {posts.map((post) => (
            <CardPost
              key={post.id}
              onClick={() => handlePostNavigate(post)}
            >
              <header>
                <h2>{post.title}</h2>
                <ArrowRight size={24}/>
              </header>

              <p>{post.body}</p>
            </CardPost>
          ))}

          {currentPage < totalPage.current && (
            <LoadMore onClick={handleLoadMore}>
              <span>Carregar mais...</span>
            </LoadMore>
          )}
        </>
      )}


    </>
  );
}
