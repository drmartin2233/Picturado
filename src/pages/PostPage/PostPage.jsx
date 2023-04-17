import { useState, useEffect } from 'react';
import { getPost, deletePost, updatePost } from '../../utilities/posts-service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';

export default function PostPage() {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([]);
    const [refresh, toggleRefresh] = useState()
    let {id}= useParams()

    useEffect(function() {
        async function retrievePost() {
            const retrievedPost = await getPost(id);
            setPost(retrievedPost)
        }
       retrievePost()
    }, []) 

    async function deleteImage(id) {
        console.log('in delete image function')
        await deletePost(id)
        const onePost = await getPost()
        setPost(onePost)
    }

    async function updatePost(id) {
        await updatePost(id)
        toggleRefresh({})
    }

    return(
        <>
        <h1>Post Page</h1>

    { 
        <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <div className="imageFrame">
            <image src={post.image} />
            </div>
            <button onClick={ () => deleteImage(post._id)}>Delete Post</button>
            <Link to={`/posts/${post._id}/edit`}><button>Edit Post</button></Link>
        </div>
    }
        <h2>Comments</h2>
         <CommentList id={id}/> 
        <div className="form-container align-center">
         <CommentForm id={id} />   
        </div>

       
        
        </>
    )
};  