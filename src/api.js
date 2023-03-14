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
  const parsedId = parseInt(articleId);
  return articleApi.get(`/articles/${parsedId}`).then(({ data }) => {
    return data.articleById;
  });
};
