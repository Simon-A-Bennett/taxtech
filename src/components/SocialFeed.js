import { useState } from 'react';
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';

const SocialFeed = () => {
  const [socialOpen, setSocialOpen] = useState();

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
            style={{
              display: 'flex',
              justifyContent: 'center',
              '&::WebkitScrollbar': {
                backgroundColor: 'black',
              },
            }}
          >
            <FacebookEmbed
              url='https://www.facebook.com/andrewismusic/posts/451971596293956'
              width={330}
            />
          </div>
          <div
            className='tw-embedded'
            style={{
              display: 'flex',
              justifyContent: 'center',
              border: 'none',
            }}
          >
            <TwitterEmbed
              style={{
                maxWidth: 330,
                overflowY: 'scroll',
                border: 'none',
              }}
              url='https://twitter.com/CosmicSprngJWST/status/1554261442148311042'
              width='100%'
            />
          </div>
          <div
            className='ig-embedded'
            style={{
              display: 'flex',
              justifyContent: 'center',
              border: 'none',
              height: 375,
              overflowY: 'scroll',
            }}
          >
            <InstagramEmbed
              url='https://www.instagram.com/p/Cul-NQtuRSu/'
              width={330}
            />
          </div>
          <div
            className='tt-embedded'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <TikTokEmbed
              url='https://www.tiktok.com/@astro_alexandra/video/7119250319762050347'
              width={330}
              border={'none'}
            />
          </div>
          <div
            className='li-embedded'
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <LinkedInEmbed
              className='li-embedded'
              url='https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384'
              postUrl='https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7'
              width={330}
              height={350}
              border={'none'}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SocialFeed;
