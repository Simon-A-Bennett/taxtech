import Grid from '../ui/Footer';
import Header from '../ui/Header';
import SocialFeed from '../components/SocialFeed';
import Testimonials from '../components/Testimonials';
import ContentBox from '../components/ContentBox';
import office from '../assets/img/new-header.jpg';
import Divider from '../components/Divider';

const Home = ({ testimonials }) => {
  return (
    <div>
      <Header />
      <Divider />
      <ContentBox source={office} alt={'office workers'}>
        <p>Good morning!! This is just placeholder text</p>
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
