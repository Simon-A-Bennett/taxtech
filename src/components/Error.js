import { useRouteError } from 'react-router-dom';
import Nav from '../ui/Nav';

const Error = () => {
  const error = useRouteError();
  console.log(error.message);
  return (
    <>
      <Nav />
      <main className='errors'>
        <h1>An error occurred</h1>
        {error.message}
      </main>
    </>
  );
};
export default Error;
