const Post = ({ post }) => {
  return (
    <div>
      <div className='post-container'>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
export default Post;
