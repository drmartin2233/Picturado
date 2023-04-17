import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CommentForm = ({id}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/comments', {
        name,
        // email,
        message,blogPostId: id
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Leave a Comment</h3>
      {success && <p>Thank you for your comment!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        {/* <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label> */}
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
