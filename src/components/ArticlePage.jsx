import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, getComments } from '../api.js';
import Comment from './Comment';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticle(id)
      .then((data) => {
        setArticle(data.article)
        return getComments(id)
      })
      .then((data) => {
        setComments(data.comments);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching article', error.message)
        setLoading(false)
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) {
    return <p>Loading article...</p>;
  }
  
  return (
    <div className="article-page">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Published on: {new Date(article.created_at).toLocaleDateString()}</p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url} alt={article.title} className="article-image" />

      <div className="comments-section">
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          <div>
            {comments.map((comment) => (
              <div key={comment.comment_id} className='comment-card'>
              <Comment comment={comment} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticlePage;