import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './ui/Nav';
import Home from './pages/Home';
import Footer from './ui/Footer';
import Blog from './pages/Blog';
import Post from './pages/Post';
import SocialFeed from './components/SocialFeed';

function App() {
  // const [testimonials, setTestimonials] = useState(null);

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);
  const [socialOpen, setSocialOpen] = useState(false);

  // const getTestimonials = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/testimonials?`);
  //     const data = await response.json();
  //     setTestimonials(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts?`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getTestimonials();
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home socialOpen={socialOpen} setSocialOpen={setSocialOpen} />
            }
          />
          <Route
            path='/blog'
            element={
              <Blog
                post={post}
                getPosts={getPosts}
                setPost={setPost}
                posts={posts}
              />
            }
          />
          <Route path={`/post`} element={<Post post={post} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
