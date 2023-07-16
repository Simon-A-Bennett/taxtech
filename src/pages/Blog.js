import BlogItems from '../components/BlogItems';

const Blog = ({ posts, setPost }) => {
  return (
    <div className='posts-container'>
      {posts?.map((post) => (
        <BlogItems setPost={setPost} key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Blog;
