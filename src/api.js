import axios from 'axios';

function getArticles() {
  return axios.get(`https://jockeys-news.onrender.com/api/articles`)
    .then((response) => {
        return response.data
    })
    .catch(error => {
      console.error(`Error fetching articles: ${error.message}`);
      throw error;
    });
}

export { getArticles };