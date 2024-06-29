import React from 'react'
import {Container} from "../index"
import useFetchPosts from '../useFetchPosts';
import Allpost from './Allpost';

function Home() {
    const {posts, loading} =  useFetchPosts()
    


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center max-h-full">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-10 w-full h-56  ">
                            <h1 className="text-2xl font-bold hover:text-gray-500 mt-10">
                                There is no post...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
  return (
      <div>
          <Allpost/>
    </div>
  )
}

export default Home
