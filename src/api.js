export const getAllArticles = () => {
  return fetch("https://alexis-news-server.onrender.com/api/articles")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.articles;
    });
};
