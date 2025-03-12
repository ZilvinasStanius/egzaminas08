import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export default function useDeletePost() {
  const { posts, setPosts } = useContext(PostContext);
  async function deletePost(postId) {
    const promise = await fetch(
      `http://localhost:8080/api/post/deletePost/${postId}`,
      { method: 'DELETE' }
    );

    const filteredPosts = posts.filter((post) => post.id !== postId);

    if (promise.ok) {
      setPosts(filteredPosts);
      alert('post deleted');
    }
  }
  return { deletePost };
}