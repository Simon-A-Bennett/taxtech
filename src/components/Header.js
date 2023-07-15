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
              <p>Dedicated to providing research and development</p>
            </li>
            <li>
              <p>Research and Development Tax Claims</p>
            </li>
            <li>
              <p>Provide and enhance digital marketing </p>
            </li>
            <li>
              <p>Content creation for social media and business promotion</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
