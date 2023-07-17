const NavLinks = () => {
  return (
    <div className='nav-links-container'>
      <div className='nav-links'>
        <a href='http://localhost:3001/'>
          <span>Home</span>
        </a>
        <span>Services</span>
        <a href='http://localhost:3001/blog'>
          <span>Blog</span>
        </a>
        <span>About</span>
        <a href='#contact'>
          {' '}
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
};
export default NavLinks;
