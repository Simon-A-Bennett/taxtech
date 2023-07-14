import { BrowserRouter, Routes, Route } from 'react-router-dom';
import testimonials from './components/Testimonials';
import Home from './pages/Home';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';

function App() {
  const [testimonials, setTestimonials] = useState(null);

  const getTestimonials = async () => {
    try {
      const response = await fetch(`http://localhost:3001/testimonials?`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  console.log(testimonials);

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home testimonials={testimonials} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
