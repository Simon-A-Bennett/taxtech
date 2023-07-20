import { useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Error from './components/Error';

import Blog from './pages/Blog';
import BlogPosts, { loader as blogPostsLoader } from './pages/BlogPosts';
import BlogPostPage, { loader as blogPostLoader } from './pages/BlogPostPage';
import CreatePost from './pages/CreatePost';

function App() {
  useEffect(() => {
    window.addEventListener('error', (e) => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<Error />}>
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
