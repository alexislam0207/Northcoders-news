export const getAllArticles = (topic, query, order, page) => {
  let url = "https://alexis-news-server.onrender.com/api/articles";

  if (topic !== "all-articles") {
    url += `?topic=${topic}&sort_by=${query}&order=${order}&p=${page}`;
  } else {
    url += `?sort_by=${query}&order=${order}&p=${page}`;
  }
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.articles;
    });
};

export const getAllTopics = () => {
  return fetch("https://alexis-news-server.onrender.com/api/topics")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.topics;
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

export const deleteComment = (comment_id) => {
  return fetch(
    `https://alexis-news-server.onrender.com/api/comments/${comment_id}`,
    {
      method: "DELETE",
    }
  );
};

export const getAllUsers = () => {
  return fetch("https://alexis-news-server.onrender.com/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.users;
    });
};
