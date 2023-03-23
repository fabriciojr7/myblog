import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { CommentProps } from '../../interfaces/CommentProps';
import { UserProps } from '../../interfaces/UserProps';
import { api } from '../../server/api';
import { CardContent, ContainerComments } from './styles';

export function PostDetail(){
  const {post} = useContext(PostContext);
  const [user, setUser] = useState<UserProps | null>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);
  const navigate = useNavigate();
  const {id} = useParams();

  const loadData = async (idUser: number) => {
    try {
      const [
        dataUser,
        dataComments
      ] = await Promise.all([
        await api.get(`users/${idUser}`),
        await api.get(`/posts/${id}/comments`)
      ]);

      setUser(dataUser.data);
      setComments(dataComments.data);

    } catch(err) {
      console.log('Home: ', err);
    }
  };

  useEffect(()=> {
    if(!post){
      return navigate('/');
    }else{
      loadData(post.userId);
    }
  }, []);

  return (
    <>
      <CardContent>
        <h2>{post?.title}</h2>
        <p className='body'>{post?.body}</p>
        <p>Publicado por: </p><span>{user?.username}</span>
      </CardContent>

      <ContainerComments>
        <h2 className='comments'>Comentários ({comments.length})</h2>

        {comments.map((comment) => (
          <CardContent key={comment.id} type='comment'>
            <h2>{comment?.name}</h2>
            <p className='body'>{comment?.body}</p>
            <span>{comment?.email}</span>
          </CardContent>
        ))}
      </ContainerComments>
    </>
  );
}
