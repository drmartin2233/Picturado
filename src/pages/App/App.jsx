import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import NewPostsPage from '../NewPostPage/NewPostPage';
import EditPostPage from '../EditPostPage/EditPostPage';
import PostPage from '../PostPage/PostPage';

import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
           
            <Routes>
              {/* Route components in here */}

              <Route path="/posts/new" element={ <NewPostsPage /> }/>
              <Route path="/posts/:id" element={ <PostPage /> }/>
              <Route path="/posts" element={ <AllPostsPage /> }/>
              <Route path="/posts/:id/edit" element={ <EditPostPage /> }/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
