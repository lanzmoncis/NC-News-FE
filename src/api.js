import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://nc-backend.onrender.com/api",
});

function getArticles() {
  return articleApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export default getArticles;
