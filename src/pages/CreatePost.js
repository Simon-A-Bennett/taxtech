import Button from '../components/Button';

const CreatePost = () => {
  const newPostHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className='create-post-container'>
        <h1>Create a new post</h1>
        <form onSubmit={newPostHandler}>
          <div>
            <label>Post title</label>
            <input className='create-post-title' type='text' />
          </div>
          <div>
            <label>Post body</label>
            <input className='create-post-body' type='text' />
          </div>
          <div>
            <Button>Create post</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
