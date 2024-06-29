import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';

function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const post = await service.getPosts([]);
                if (post) {
                    setPosts(post.documents);
                }
            } catch (error) {
                console.log('Fetch Posts Error:', error)
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [])

    return { posts, loading };
}

export default useFetchPosts