import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';

function App() {
  const [testimonials, setTestimonials] = useState(null);

  const getTestimonials = async () => {
    try {
      const response = await fetch(`http://localhost:3000/testimonials?`);
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
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home testimonials={testimonials} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
