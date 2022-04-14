import { responsiveFontSizes } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const BASE_API_URL = "https://abacus-22-backend.herokuapp.com/";
export const BASE_API_URL = "http://13.235.241.226:8000";
//export const BASE_API_URL = "http://localhost:8000";
export const googleSignIn = () => {
  window.location.href = BASE_API_URL + "/user/login/google";
};

export const normalSignIn = async (values) => {
  const details = await axios
    .post(BASE_API_URL + "/user/login", values)
    //.post("https://abacus-22-backend.herokuapp.com/user/login", values)
    .then((response) => {
      if (response.status === 200) {
        //console.log("Token ==", response.data.details.token);
        localStorage.setItem("apiToken", response.data.details.token);
        // alert(" token has been generated, check console");
        toast.success("✅ Token has been generated, check console");

        return response.data;
      }
    })
    .catch((err) => {
      //console.log("the error is", err);
      toast.error(err.response.data.message);
      if (err.response.status === 404) {
        setTimeout(() => {
          window.location = "http://localhost:3000/Login/";
        }, 1000);
      }
    });

  return details;
};

export const afterGoogleSignIn = () => {
  // //console.log("function after g sign called");
  const url = new URL(window.location.href);
  // //console.log("url is", url);
  const searchparams = new URLSearchParams(url.search);
  // //console.log("search params is", searchparams);
  if (searchparams.has("message")) {
    const msg = searchparams.get("message");
    // //console.log(msg);
    window.alert(msg);
  }
  if (searchparams.has("token")) {
    // setToken(searchparams.get("token"));
    localStorage.setItem("apiToken", searchparams.get("token"));
    // //console.log("token is ", searchparams.get("token"));
    //console.log("token is : ", localStorage.getItem("apiToken"));
  }
};

export const forgetPassword = async (values) => {
  const msg = await axios
    .post("http://localhost:8000/forgetPassword", values)
    .then((response) => {
      if (response.status === 200) {
        // var res_msg = document.getElementById("msg");
        // res_msg.innerHTML = response.data.message;

        //console.log(response.data.message);
        //console.log("Forget Password successful");
        return response.data.message;
      }
    })
    .catch((err) => {
      //console.log("the error code is", err.response.status);

      toast.info(err.response.data.message);
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
        //console.log(response.data.message);
        //console.log("Reset Password Successful");
        return response.data.message;
      }
    })
    .catch((err) => {
      var msg = document.getElementById("alert_msg");
      msg.innerHTML = err.response.data.message;
      toast.info(err.response.data.message);

      //console.log(err.response.data.message);
      //console.log("the error code is", err.response.status);
    });
  return msg;
};

export const verifyUserAPI = async (email, code) => {
  const data = await axios
    .post(BASE_API_URL + "/user/signup/verifyUser", {
      email,
      code,
    })
    .then((response) => {
      if (response.status == 200) {
        return { message: response.data.message, status: "verified" };
      }
    })
    .catch((err) => {
      //console.log(err.response);
      return { status: "error", message: err.response.data.message };
    });

  return data;
};

export const signUp = (signupURL, values) => {
  axios
    .post(signupURL, values)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        alert(response.data.message);
        // setMessage(response.data.message);
        window.location = "http://localhost:3000/Login";
      }
      //console.log(response);
    })
    .catch((err) => {
      //console.log(err);
      if (err.response.data.code === 11000) {
        alert(
          err.response.data.keyValue.email +
            "is already registered. Go to login"
        );
        setTimeout(() => {
          window.location = "http://localhost:3000/Login";
        }, 300);
      } else {
        //console.log(err.response.data);
      }
    });
};

export const eventRegistration = async (id,name) => {
  const token = localStorage.getItem("apiToken");
  const data = await axios({
    method: 'put',
    url: "http://localhost:8000/user/registration/"+id+"/"+name,
    headers: {
        "Authorization": "Bearer " + token
    },
  })
  .then(function (response) {
    if (response.status === 200) {
      toast.success(response.data.message);
    }
  })
  .catch((err) => {
      toast.error(err.response.message);
  });
  //return data;
};

export const logOut = () => {
  axios
    .post(
      BASE_API_URL + "/user/logout",
      {},
      {
        headers: {
          Authorization: localStorage.getItem("apiToken"),
        },
      }
    )
    .then((response) => {
      localStorage.removeItem("apiToken");
      toast(response.data);
    });
};
