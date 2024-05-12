import React from 'react'
import useFetchPosts from '../useFetchPosts'
import Container from '../container/Container'
import PostCard from '../PostCard'
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';

function Allpost() {
    const { posts, loading } = useFetchPosts();
    // const userData = useSelector(state => state.auth.userData)
    if (posts.length === 0) {
        return (
            <div className=" flex h-72 w-full py-8 justify-center items-center">
                <Container>
                    <div className="flex flex-wrap max-h-72">
                        <div className=" flex p-2 w-full justify-center items-center">
                        
                                <Spinner/>
                            
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return !loading ? (
        <div className='w-full py-8'>
            <Container>
                <div className=' flex flex-wrap w-full py-8'>
                    {
                        posts && posts.map(post => (
                            <div key={post.$id} className='p-5 w-1/5'>
                                <PostCard {...post}/>
                            </div>
                        ))
                    }
            </div>
            </Container>
    </div>
  
    ) : (
            <Spinner/>
  )
}

export default Allpost
