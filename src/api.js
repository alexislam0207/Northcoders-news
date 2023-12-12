export const getAllArticles = () => {
  return fetch("https://alexis-news-server.onrender.com/api/articles")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return fetch(
    `https://alexis-news-server.onrender.com/api/articles/${article_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.article;
    });
};

export const getComments = (article_id) => {
  return fetch(
    `https://alexis-news-server.onrender.com/api/articles/${article_id}/comments`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.comments;
    });
};

export const updateVote = (article_id, vote) => {
  return fetch(
    `https://alexis-news-server.onrender.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: vote }),
    }
  );
};

export const postComment = (article_id, username, body) => {
  return fetch(
    `https://alexis-news-server.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        body: body,
      }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.comment;
    });
};
