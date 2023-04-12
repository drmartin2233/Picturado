import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export async function getPosts() {
  return sendRequest(BASE_URL);
}

export async function createPostRequest(postData) {
    const newPost ={ }
    return sendRequest(BASE_URL, 'POST', newPost)
}