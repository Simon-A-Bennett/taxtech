import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';

const SocialFeed = () => {
  return (
    <div>
      <div className='social-container'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FacebookEmbed
            url='https://www.facebook.com/andrewismusic/posts/451971596293956'
            width={300}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TwitterEmbed
            style={{
              maxWidth: 550,
            }}
            url='https://twitter.com/PixelAndBracket/status/1356633038717923333'
            width='100%'
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed
            url='https://www.instagram.com/taxtechltd/'
            width={350}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TikTokEmbed
            url='https://www.tiktok.com/@epicgardening/video/7055411162212633903'
            width={325}
          />
        </div>
      </div>
    </div>
  );
};
export default SocialFeed;
