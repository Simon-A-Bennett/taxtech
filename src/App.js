import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostPage, { loader as blogPostLoader } from './pages/BlogPostPage';
import BlogPosts, { loader as blogPostsLoader } from './pages/BlogPosts';
import CreatePost from './pages/CreatePost';
import RootLayout from './pages/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />}>
          <Route index element={<BlogPosts />} loader={blogPostsLoader} />
          <Route
            path=':id/:title'
            element={<BlogPostPage />}
            loader={blogPostLoader}
          />
        </Route>
        <Route path={`/create-post`} element={<CreatePost />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
