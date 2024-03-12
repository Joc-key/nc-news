import React, { useEffect, useState } from 'react';
import Article from './Article';
import { getArticles } from '../api.js';
import { Link } from 'react-router-dom';

function ItemsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.articles)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching articles', error.message)
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="article-list">
          {articles.map((article) => (
            <div className="article-link" key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <Article article={article} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemsList;