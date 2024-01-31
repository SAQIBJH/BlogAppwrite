import React from 'react'
import useFetchPosts from '../useFetchPosts'
import Container from '../container/Container'
import PostCard from '../PostCard'
import Spinner from '../Spinner';

function Allpost() {
    const { posts, loading } = useFetchPosts()
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                There is no post...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return !loading ? (
        <div className='w-full py-8'>
            <Container>
                <div>
                    {
                        posts && posts.map(post => (
                            <div key={post.$id} className='p-2 w-1/4'>
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
