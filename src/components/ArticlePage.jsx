import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../api.js';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticle(id).then((data) => setArticle(data.article));
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Published on: {new Date(article.created_at).toLocaleDateString()}</p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url} alt={article.title} className="article-image" />
      <p>Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticlePage;