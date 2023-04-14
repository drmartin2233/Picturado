import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getPosts() {
  return sendRequest(BASE_URL);
}

export async function createPostRequest(postData) {
    return sendRequest(BASE_URL, 'POST', postData)
}

export async function deletePostRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}