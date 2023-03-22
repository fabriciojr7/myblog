import { Route, Routes } from 'react-router-dom';
import { PostDetail } from '../pages/PostDetail';
import { Posts } from '../pages/Posts';
import { UserDetail } from '../pages/UserDetail';
import { Users } from '../pages/Users';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="/post/:id" element={<PostDetail/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/user/:id" element={<UserDetail/>}/>
    </Routes>
  );
}
