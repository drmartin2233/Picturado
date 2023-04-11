import { useState, useEffect } from 'react';
import { getAllPosts } from '../../utilities/posts-service';

export default function AllPostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(function() {
        console.log('print inside useEffect has fired')
        async function retrievePosts() {
            const retrievedPosts = await getAllPosts();
        }
       retrievePosts()
    }, [posts]) 

    return(
            <h1>AllPostsPage</h1>
    )
};  