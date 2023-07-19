import Header from '../ui/Header';
import SocialFeed from '../components/SocialFeed';
import ContentBox from '../components/ContentBox';
import office from '../assets/img/new-header.jpg';
import Divider from '../components/Divider';

const Home = ({ socialOpen, setSocialOpen }) => {
  return (
    <div>
      <Header />
      <Divider />
      <ContentBox source={office} alt='office workers'>
        <p>
          Good morning everyone!! <span>🌞</span>
        </p>
      </ContentBox>

      <SocialFeed socialOpen={socialOpen} setSocialOpen={setSocialOpen} />
    </div>
  );
};
export default Home;
