import axios from 'axios';

function getArticles() {
  return axios.get(`https://jockeys-news.onrender.com/api/articles`)
    .then((response) => {
        return response.data;
    })
    .catch(error => {
      console.error(`Error fetching articles: ${error.message}`);
      throw error;
    });
}

function getArticle(article_id) {
  return axios.get(`https://jockeys-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.error(`Error fetching article: ${error.message}`);
      throw error;
    });
}

function getComments(article_id) {
  return axios.get(`https://jockeys-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.error(`Error fetching comments: ${error.message}`);
      throw error;
    });
}

export { getArticles, getArticle, getComments };