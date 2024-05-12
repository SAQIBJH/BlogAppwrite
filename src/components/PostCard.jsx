import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom';

function PostCard({$id, title, featuredImage,username}) {
  return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 relative flex flex-col rounded-xl p-4 h-full'>
              <div className='w-full justify-center mb-4'>
                  <img src={service.getFilePreview(featuredImage)} alt={title}
                  className='rounded-xl'/>
              </div>
              <div className='flex w-full flex-col  items-center mt-1 '>
              <p className='text-sm items-end'><strong>By:</strong>{username}</p>
              <h2 className='text-xl font-bold'>{title}</h2>
                  
              </div>
          </div>   
      </Link>
  )
}

export default PostCard;
