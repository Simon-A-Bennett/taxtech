import NavLinks from './NavLinks';
import SocialIcons from '../components/SocialIcons';

const Nav = () => {
  return (
    <nav>
      <div>
        <h3>TaxTech Enterprises</h3>
      </div>
      <NavLinks />
      <div>
        <SocialIcons />
      </div>
    </nav>
  );
};
export default Nav;
