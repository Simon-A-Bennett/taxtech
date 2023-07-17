import headerPic from '../assets/img/header1.png';

const Header = () => {
  return (
    <>
      <header>
        <img src={headerPic} alt='people in office' />
        <div className='header-text-container'>
          <h2>TaxTech Enterprises</h2>
          <ul>
            <li>
              <p>Dedicated to Providing Research and Development</p>
            </li>
            <li>
              <p>Research and Development Tax Claims</p>
            </li>
            <li>
              <p>Provide and Enhance Digital Marketing </p>
            </li>
            <li>
              <p>Content Creation for Social Media and Business Promotion</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
