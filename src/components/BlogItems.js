const BlogItems = ({ post }) => {
  return (
    <div>
      <div>
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>
          <p>
            <em>{post.body}</em>
          </p>
        </div>
        <button>View full post</button>
      </div>
    </div>
  );
};
export default BlogItems;
