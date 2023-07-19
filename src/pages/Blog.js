import { Outlet } from 'react-router';

const Blog = () => {
  return (
    <>
      <div className='posts-container'>
        <Outlet />
      </div>
    </>
  );
};
export default Blog;
