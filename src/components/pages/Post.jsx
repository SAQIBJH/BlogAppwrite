import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Button } from '../index';
import parse from 'html-react-parser'

function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then(post => {
                if (post) setPost(post);
                else navigate("/")
            })
            
        } else navigate("/");
        
    }, [slug, navigate])
    const deletePost = () => {
        service.deletePost(post.$id).then(status => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        })    
    }
    return post ? (
        <div className='py-8'>
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {/* <span>By: {userData?.name }</span> */}
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className='w-full h-auto max-h-80 object-cover rounded-xl'
                    />
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>

                        </div>
                    )}
                
                </div>
                <div className='w-full h-auto max-h-80 object-cover rounded-xl border bg-slate-50 p-2 m-2'>

                    <div className='w-full mb-6'>
                        <span>By : {post?.username}</span>
                        <h1 className="text-2xl font-bold">{post.title}</h1>

                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                </div>


            </Container>
                </div>
    ) : null;
}

export default Post
