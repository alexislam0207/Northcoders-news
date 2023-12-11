export const getAllArticles = () => {
  return fetch("https://alexis-news-server.onrender.com/api/articles")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.articles;
    });
};

export const getSingleArticle=(article_id)=>{
  return fetch(`https://alexis-news-server.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.article;
    });
}