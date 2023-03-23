import { Route, Routes } from 'react-router-dom';
import { PostContextProvider } from '../contexts/PostContext';
import { PostDetail } from '../pages/PostDetail';
import { Posts } from '../pages/Posts';
import { UserDetail } from '../pages/UserDetail';
import { Users } from '../pages/Users';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={
        <PostContextProvider>
          <Posts/>
        </PostContextProvider>
      }/>
      <Route path="/post/:id" element={
        <PostContextProvider>
          <PostDetail/>
        </PostContextProvider>
      }/>

      <Route path="/users" element={<Users/>}/>
      <Route path="/user/:id" element={<UserDetail/>}/>
    </Routes>
  );
}
