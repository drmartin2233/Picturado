import { useState, useEffect } from 'react';
import { getAllPosts } from '../../utilities/posts-service';

export default function AllPostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(function() {
        async function retrievePosts() {
            const retrievedPosts = await getAllPosts();
            setPosts(retrievedPosts)
        }
       retrievePosts()
    }, []) 

    return(
        <>
        <h1>AllPostsPage</h1>

        <h3>No Posts Yet</h3>
        
        </>
    )
};  