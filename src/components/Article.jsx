import React from 'react';

const Article = ({ article }) => {
  const {
    author,
    title,
    article_id,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;

  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Published on: {new Date(created_at).toLocaleDateString()}</p>
      <p>Votes: {votes}</p>
      <img src={article_img_url} alt={title} className="article-image" />
      <p>Comments: {comment_count}</p>
    </div>
  );
};

export default Article;