import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className='nav-links-container'>
      <div className='nav-links'>
        <NavLink to='/'>
          <span>Home</span>
        </NavLink>
        <span>Services</span>
        <NavLink to='/blog'>
          <span>Blog</span>
        </NavLink>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
};
export default NavLinks;
