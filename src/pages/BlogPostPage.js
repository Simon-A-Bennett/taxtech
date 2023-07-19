import { useLoaderData } from 'react-router-dom';
import { postLoader as blogPost } from '../api';

const Post = () => {
  const postDate = new Date().toLocaleDateString();

  const postData = useLoaderData();

  return (
    <div>
      <div className='post-container'>
        <>
          <img src={postData.avatar} alt='author avatar' />
          <span className='post-author'>
            Posted by {postData.author} on {postDate}
          </span>
          <h1 className='post-title'>{postData.title}</h1>
          <p className='post-body'>{postData.body}</p>
          <p>
            <strong>Tags:</strong> {postData.tags.join(', ')}
          </p>
        </>
      </div>
    </div>
  );
};
export default Post;

export function loader({ params }) {
  const postId = params.id;
  const postTitle = params.title;
  return blogPost(postId, postTitle);
}
