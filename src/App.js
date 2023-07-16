import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './ui/Nav';
import Home from './pages/Home';
import Footer from './ui/Footer';
import Blog from './pages/Blog';

function App() {
  const [testimonials, setTestimonials] = useState(null);
  const [posts, setPosts] = useState(null);

  const getTestimonials = async () => {
    try {
      const response = await fetch(`http://localhost:3000/testimonials?`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error(error);
    }
  };

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
    getTestimonials();
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home testimonials={testimonials} />} />
          <Route path='/blog' element={<Blog posts={posts} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
