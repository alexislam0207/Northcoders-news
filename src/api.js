import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://alexis-news-server.onrender.com/api",
});

export const getAllArticles = (topic, query, order, page) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic !== "all-articles" ? topic : null,
        sort_by: query,
        order: order,
        p: page
      },
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const getAllTopics = () => {
  return newsApi.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const updateVote = (article_id, vote) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote });
};

export const postComment = (article_id, username, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const getAllUsers = () => {
  return newsApi.get("/users").then((response) => {
    return response.data.users;
  });
};
