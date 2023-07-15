import Grid from '../components/Footer';
import Header from '../components/Header';
import SocialFeed from '../components/SocialFeed';
import Testimonials from '../components/Testimonials';
import ContentBox from '../components/ContentBox';
import office from '../assets/img/new-header.jpg';

const Home = ({ testimonials }) => {
  return (
    <div>
      <Header />
      <ContentBox source={office} alt={'office workers'}>
        <p>Hello</p>
      </ContentBox>
      {/* <SocialFeed /> */}
      <div className='feedback'></div>
      {/* <div className='testimonial-container'>
        {testimonials?.map((testimonial) => (
          <Testimonials key={testimonial.id} testimonial={testimonial} />
        ))} */}
    </div>
  );
};
export default Home;
