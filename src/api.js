import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://alexis-news-server.onrender.com/api",
});

export const getAllArticles = (topic) => {
  let url = "https://alexis-news-server.onrender.com/api/articles";

  if (topic !== "all-articles") {
    url += `?topic=${topic}`;
  }

  return fetch(url)
    .then((res) => {
      // if(!res.ok){
      //   console.log(res);
      // }
      return res.json();
    })
    .then((data) => {
      if (data.msg) {
        return Promise.reject(data);
      }
      return data.articles;
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
  })
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  })
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
