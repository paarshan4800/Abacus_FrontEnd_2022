import axios from "axios";

const BASE_API_URL = "http://abacus-22-backend.herokuapp.com/";

export const googleSignIn = () => {
  window.location = BASE_API_URL + "user/login/google";
};
