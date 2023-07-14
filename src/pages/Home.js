import Grid from '../components/Grid';
import Header from '../components/Header';
import SocialFeed from '../components/SocialFeed';
import Testimonials from '../components/Testimonials';

const Home = ({ testimonials }) => {
  return (
    <div>
      <Header />
      <SocialFeed />
      <div className='feedback'>
        <h1>Latest feedback</h1>
      </div>
      <div className='testimonial-container'>
        {testimonials?.map((testimonial) => (
          <Testimonials key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <Grid />
    </div>
  );
};
export default Home;
