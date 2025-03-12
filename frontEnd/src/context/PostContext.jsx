import { createContext, useEffect, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const promise = await fetch('http://localhost:8080/api/post');

      const response = await promise.json();

      console.log(response);
      setPosts(response);
    }
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}