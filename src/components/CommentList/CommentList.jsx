import React, { useState, useEffect } from "react";

const CommentList = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {comments.map((comment) => (
          <div key={comment._id}>
          <p>{comment.name}</p>
          <p>{comment.message}</p>
          <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
