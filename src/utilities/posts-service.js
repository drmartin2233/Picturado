import * as postsAPI from './posts-api';


export async function getAllPosts() {
    const posts = await postsAPI.getPosts();
    return posts
};

export async function getPost(id) {
    const post = await postsAPI.getPost(id);
    return post
};


export async function createPost(postData) {
    const post = await postsAPI.createPostRequest(postData);
    return post;
    
}


export async function deletePost(id) {
    const post = await postsAPI.deletePostRequest(id);
    
}

export async function updatePost(id, postData) {
    const post = await postsAPI.editPostRequest(id, postData);
    return post;
     
}
   