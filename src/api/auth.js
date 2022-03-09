import axios from "axios";

const BASE_API_URL = "https://abacus-22-backend.herokuapp.com/";

export const googleSignIn = () => {
  window.location = BASE_API_URL + "user/login/google";
};

export const addToCart = () => {
  console.log(localStorage.getItem("apiToken"));
  axios.post(
    BASE_API_URL + "user/cart/add",
    { eventId: "5" },
    { headers: { Authorization: localStorage.getItem("apiToken") } }
  ).then(res => {
    return res.json;
  });
};
