import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://nc-backend.onrender.com/api",
});

export const getArticles = () => {
  return articleApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (articleId) => {
  return articleApi.get(`/articles/${articleId}`).then(({ data }) => {
    return data.articleById;
  });
};

export const getArticleComments = (articleId) => {
  return articleApi.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.commentsById;
  });
};

export const patchArticleVote = (articleId) => {
  return articleApi.patch(`/articles/${articleId}`, { inc_votes: 1 });
};

export const addComment = (articleId, newComment) => {
  return articleApi
    .post(`/articles/${articleId}/comments`, {
      body: newComment,
      username: "grumpy19",
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getArticlesByTopic = (topic) => {
  return articleApi
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};
