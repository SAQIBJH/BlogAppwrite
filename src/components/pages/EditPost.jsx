import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import service from '../../appwrite/config';
import {Container,  PostForm } from '../index';

function EditPost() {
    const [post, setPost] = useState();
    const { slug } = useParams()
    const navigate = useNavigate();
    useEffect(() => { 
        if (slug) {
            service.getPost(slug).then(post => {
                if (post) setPost(post);
            })
        } else navigate('/');
    }, [navigate, slug]);    
  return post ? (
      <div className='py-8'>
          <Container>
              <PostForm post  = {post} />
          </Container>
      
    </div>
  ) : null
}

export default EditPost
