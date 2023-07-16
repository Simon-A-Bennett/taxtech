import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';

const SocialFeed = ({ socialOpen, setSocialOpen }) => {
  const onShowSocials = () => {
    setSocialOpen((socialOpen) => !socialOpen);
  };

  return (
    <div>
      <div className='social-btn-container'>
        <button onClick={onShowSocials} className='socials-btn'>
          Check out the latest from our socials
        </button>
      </div>
      {socialOpen && (
        <div className='social-feed-container'>
          <div
            className='fb-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <FacebookEmbed
              url='https://www.facebook.com/andrewismusic/posts/451971596293956'
              width={330}
            />
          </div>
          <div
            className='tw-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <TwitterEmbed
              style={{
                maxWidth: 330,
              }}
              url='https://twitter.com/PixelAndBracket/status/1356633038717923333'
              width='100%'
            />
          </div>
          <div
            className='ig-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <InstagramEmbed
              url='https://www.instagram.com/taxtechltd/'
              width={330}
            />
          </div>
          <div
            className='tt-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <TikTokEmbed
              url='https://www.tiktok.com/@epicgardening/video/7055411162212633903'
              width={330}
            />
          </div>
          <div
            className='li-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <LinkedInEmbed
              className='scroll'
              url='https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384'
              postUrl='https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7'
              width={330}
              height={350}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SocialFeed;
