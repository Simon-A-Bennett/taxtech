import { Link } from 'react-router-dom';
import Button from './Button';
import ContentBox from './ContentBox';
import postsimg from '../assets/img/new-header.jpg';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <ContentBox
          source={postsimg}
          alt='people at desk'
          key={post.id}
          fontSize='15px'
        >
          <div>
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
        </ContentBox>
      ))}
    </>
  );
};

export default Posts;

// <div key={post.id} className='posts'>
//   <div>
//     <h2>{post.title}</h2>
//   </div>
//   <div>
//     <p>
//       <em>{post.body}</em>
//     </p>
//   </div>
//   <Link to={`${post.id}/${post.title.replaceAll(' ', '-')}`}>
//     <Button>View post</Button>
//   </Link>
// </div>;
