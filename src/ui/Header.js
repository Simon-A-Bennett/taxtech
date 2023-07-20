import { Balancer } from 'react-wrap-balancer';
import headerPic from '../assets/img/a.jpg';

const Header = () => {
  return (
    <>
      <header>
        <div>
          {' '}
          <img src={headerPic} alt='people in office' />{' '}
        </div>
        <div className='header-text-container'>
          <h2>
            <Balancer> TaxTech Enterprises</Balancer>
          </h2>
          <ul>
            <li>
              <p>
                <Balancer>
                  Dedicated to Providing Research and Development
                </Balancer>
              </p>
            </li>
            <li>
              <p>
                <Balancer>Research and Development Tax </Balancer>
              </p>
            </li>
            <li>
              <p>
                <Balancer> Providing and Enhancing Digital Marketing</Balancer>
              </p>
            </li>
            <li>
              <p>
                <Balancer>
                  Content Creation for Social Media and Business Promotion
                </Balancer>
              </p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
