import { useState, useEffect } from 'react';
import { getPost, deletePost, updatePost } from '../../utilities/posts-service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function AllPostsPage() {
    const [post, setPost] = useState([])
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
                <button onClick={ () => deleteImage(post._id)}>Delete Post</button>
                <Link to={`/posts/${post._id}/edit`}><button>Edit Post</button></Link>
            </div>
        }

        <h3></h3>
        
        </>
    )
};  