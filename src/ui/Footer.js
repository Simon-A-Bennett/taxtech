import FooterAddress from '../components/FooterAddress';
import FooterLinks from '../components/FooterLinks';
import FooterSocial from '../components/FooterSocial';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <FooterAddress />
      <FooterLinks />
      <FooterSocial />
    </footer>
  );
};
export default Footer;
