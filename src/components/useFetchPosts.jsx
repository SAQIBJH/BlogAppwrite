import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';

function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
              service.getPosts([]).then(post => {
                  if (post) setPosts(post.documents);
                  
            })
          } catch (error) {
              console.log('Fetch Posts Error:', error)
            
          } finally {
              setLoading(false);
          }
        }
        fetchPosts();
    
      
    }, [])
    
    
    console.log("posts : ", posts)
    return { posts, loading };
}

export default useFetchPosts
