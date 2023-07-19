import { Outlet } from 'react-router';

import Nav from '../ui/Nav';
import Footer from '../ui/Footer';

const RootLayout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
