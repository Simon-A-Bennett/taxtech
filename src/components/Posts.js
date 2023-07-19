import { Link } from 'react-router-dom';
import Button from './Button';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className='posts'>
          <div>
            <h2>{post.title}</h2>
          </div>
          <div>
            <p>
              <em>{post.body}</em>
            </p>
          </div>
          <Link to={`${post.id}/${post.title.replaceAll(' ', '-')}`}>
            <Button>View post</Button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
