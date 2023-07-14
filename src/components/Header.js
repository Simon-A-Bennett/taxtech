import headerPic from '../assets/img/header.png';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='img-container'>
          <img src={headerPic} alt='' />
        </div>
        <div className='text-container'>
          <p>
            <strong> We specialize in research and development</strong>
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
