import useAddPost from '../customHooks/useAddPost';
import { PostContext } from '../context/PostContext';
import { useContext, useState } from 'react';
import useDeletePost from '../customHooks/useDeletePost';
import { Link } from 'react-router-dom';
import useUpdatePost from '../customHooks/useUpdatePost';
import { SessionContext } from '../context/SessionContext';

export default function AddPost() {
  const { addPost } = useAddPost();
  const { deletePost } = useDeletePost();
  const { posts } = useContext(PostContext);
  const { updatePost } = useUpdatePost();
  const { userData } = useContext(SessionContext);
  const [isEditable, setIsEditable] = useState(null);


  if (isEditable) {
    return (
      <>
        <div>Edit post</div>
        <form
          key={isEditable.id}
          onSubmit={async (e) => {
            await updatePost(e, isEditable.id);
            setIsEditable(null);
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={isEditable.title}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={isEditable.description}
          />
          
          <button type="submit">Update Post</button>
          <span>
            <b>
              <Link onClick={() => setIsEditable(null)}>Back to list</Link>
            </b>
          </span>
        </form>
      </>
    );
  }

  return (
    <>
      <div>Post your problem</div>
      <form onSubmit={addPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={''}
          required
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          required
          defaultValue={''}
        />
        
        <button type="submit">Post</button>
        <span>
          <b></b>
        </span>
      </form>

      <ul>
        {posts.map((post, index) => (
          <li key={`post-${index}`}>
            {post.title} || {post.description} || {post.status !== false? "Pending" : "Complete"}___
            <Link onClick={() => deletePost(post.id)}>Delete Post</Link>
           
            <Link onClick={() => setIsEditable(post)}> Edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
}