import React from 'react';

const Comment = ({ comment }) => {
  const { author, body, created_at, votes } = comment;

  return (
    <div className="comment-card">
      <p>{author} said:</p>
      <p>{body}</p>
      <p>Kudos: {votes}</p>
      <p>Posted on: {new Date(created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Comment;