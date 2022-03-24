import axios from "axios";

export const getArticles = async (setArticles, setLoaded) => {
  setLoaded(false);
  const response = await axios.get("https://storage.googleapis.com/aller-structure-task/test_data.json");

  setLoaded(true);

  let temp = [];
  response.data[0].map((item) => {
    temp.push(item);
  });
  setArticles(temp);
};
