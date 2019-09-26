import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://spider-back-end.herokuapp.com",
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });
};
