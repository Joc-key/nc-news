import React, { useEffect, useState } from 'react';
import Article from './Article';
import { getArticles } from '../api.js';

function ItemsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ItemsList;