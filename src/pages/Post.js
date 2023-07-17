const Post = ({ post }) => {
  const postDate = new Date().toLocaleDateString();

  return (
    <div>
      <div className='post-container'>
        {!post ? (
          <h1>Post Not Found</h1>
        ) : (
          <>
            <img src={post.avatar} alt='author avatar' />
            <span className='post-author'>
              Posted by {post.author} on {postDate}{' '}
            </span>
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-body'>{post.body}</p>
            <p>
              <strong>Tags:</strong> {post.tags[0]}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Post;
