import BlogItems from '../components/BlogItems';

const Blog = ({ posts }) => {
  return (
    <div className='post-container'>
      {posts?.map((post) => (
        <div className='post'>
          <BlogItems post={post} />
        </div>
      ))}
    </div>
  );
};
export default Blog;
