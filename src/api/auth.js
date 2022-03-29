import { responsiveFontSizes } from "@material-ui/core";
import axios from "axios";

// const BASE_API_URL = "https://abacus-22-backend.herokuapp.com/";
const BASE_API_URL = "https://localhost:8000";

export const googleSignIn = () => {
  window.location = BASE_API_URL + "user/login/google";
};

export const normalSignIn = async (values) => {
  const details = await axios
    .post(BASE_API_URL + "/user/login", values)
    //.post("https://abacus-22-backend.herokuapp.com/user/login", values)
    .then((response) => {
      if (response.status === 200) {
        console.log("Token ==", response.data.details.token);
        localStorage.setItem("apiToken", response.data.details.token);
        alert(" token has been generated, check console");
        return response.data.details;
      }
    })
    .catch((err) => {
      console.log("the error code is", err.response.status);
      alert(err.response.data.message);
      if (err.response.status === 404) {
        setTimeout(() => {
          window.location = "http://localhost:3000/Login#/";
        }, 1000);
      }
    });

  return details;
};

export const afterGoogleSignIn = () => {
  // console.log("function after g sign called");
  const url = new URL(window.location.href);
  // console.log("url is", url);
  const searchparams = new URLSearchParams(url.search);
  // console.log("search params is", searchparams);
  if (searchparams.has("message")) {
    const msg = searchparams.get("message");
    // console.log(msg);
    window.alert(msg);
  }
  if (searchparams.has("token")) {
    setToken(searchparams.get("token"));
    localStorage.setItem("apiToken", token);
    // console.log("token is ", searchparams.get("token"));
    console.log("token is : ", localStorage.getItem("apiToken"));
  }
};

export const forgetPassword = async (values) => {
  const msg = await axios
    .post("http://localhost:8000/forgetPassword", values)
    .then((response) => {
      if (response.status === 200) {
        // var res_msg = document.getElementById("msg");
        // res_msg.innerHTML = response.data.message;

        console.log(response.data.message);
        console.log("Forget Password successful");
        return response.data.message;
      }
    })
    .catch((err) => {
      console.log("the error code is", err.response.status);

      var err_msg = document.getElementById("msg");
      err_msg.innerHTML = err.response.data.message;
    });
  return msg;
};

export const resetPassword = async (token, values) => {
  const msg = await axios
    .put("http://localhost:8000/resetPassword/" + token, values)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.message);
        console.log("Reset Password Successful");
        return response.data.message;
      }
    })
    .catch((err) => {
      var msg = document.getElementById("alert_msg");
      msg.innerHTML = err.response.data.message;
      console.log(err.response.data.message);
      console.log("the error code is", err.response.status);
    });
  return msg;
};

export const signUp = (signupURL, values) => {
  axios
    .post(signupURL, values)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        alert(response.data.message);
        // setMessage(response.data.message);
        window.location = "http://localhost:3000/Login#/sign-in";
      }
      console.log(response);
    })
    .catch((err) => {
      if (err.response.data.code === 11000) {
        alert(
          err.response.data.keyValue.email +
            "is already registered. Go to login"
        );
        setTimeout(() => {
          window.location = "http://localhost:3000/Login#/sign-in";
        }, 300);
      } else {
        console.log(err.response.data);
      }
    });
};
