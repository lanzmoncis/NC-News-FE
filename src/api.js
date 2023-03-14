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
