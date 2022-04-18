import { responsiveFontSizes } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const BASE_API_URL = "https://abacus-22-backend.herokuapp.com/";
//export const BASE_API_URL = "http://13.235.241.226:8000";
// export const BASE_API_URL = "http://localhost:8000";
export const BASE_API_URL = "https://abacus.org.in/api"; 

export const googleSignIn = () => {
  window.location.href = BASE_API_URL + "/user/login/google";
};

export const normalSignIn = async (values) => {
  const details = await axios
    .post(BASE_API_URL + "/user/login", values)
    .then((response) => {
      if (response.status === 200) {
        //console.log("Token ==", response.data.details.token);
        // localStorage.setItem("apiToken", response.data.details.token);
        // // alert(" token has been generated, check console");
        // toast.success("✅ Token has been generated, check console");
        const data = response.data;

        localStorage.setItem("name", data.name);
        localStorage.setItem("abacusId", data.abacusId);
        localStorage.setItem("apiToken", data.token);
        localStorage.setItem("eventPass", data.eventPass);
        localStorage.setItem("college", data.college);
        localStorage.setItem(
          "registrations",
          JSON.stringify(data.registrations)
        );
        if (data.workshops)
          localStorage.setItem("workshops", JSON.stringify(data.workshops));
        else localStorage.setItem("workshops", JSON.stringify([]));
        // localStorage.setItem("registrations", data.registrations);
        toast.success("Login Successful");

        return response.data;
      }
    })
    .catch((err) => {
      //console.log("the error is", err);
      toast.error(err.response.data.message);
      if (err.response.status === 404) {
        setTimeout(() => {
          window.location = "/login";
        }, 1000);
      }
    });

  return details;
};

export const afterGoogleSignIn = () => {
  const url = new URL(window.location.href);

  const searchparams = new URLSearchParams(url.search);

  if (searchparams.has("message")) {
    const msg = searchparams.get("message");

    toast.info(msg);
  }
  if (searchparams.has("name")) {
    localStorage.setItem("name", searchparams.get("name"));
  }
  if (searchparams.has("abacusId")) {
    localStorage.setItem("abacusId", searchparams.get("abacusId"));
  }
  if (searchparams.has("college")) {
    localStorage.setItem("college", searchparams.get("college"));
  }
  if (searchparams.has("token")) {
    localStorage.setItem("apiToken", searchparams.get("token"));
    return searchparams.get("token");
  }
};

export const forgetPassword = async (values) => {
  await axios
    .post(BASE_API_URL + "/forgetPassword", values)
    .then((response) => {
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    })
    .catch((err) => {
      toast.info(err.response.data.message);
    });
};

export const resetPassword = async (token, values) => {
  const msg = await axios
    .put(BASE_API_URL + "/resetPassword/" + token, values)
    .then((response) => {
      if (response.status === 200) {
        toast.success(response.data.message);
        return true;
      }
    })
    .catch((err) => {
      toast.info(err.response.data.message);
      return false;
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
        toast.success(response.data.message);
        // setMessage(response.data.message);
      }
      //console.log(response);
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.data.code === 11000) {
        toast.info("Your email is already registered. Go to login");
        setTimeout(() => {
          window.location = "/login";
        }, 300);
      } else {
        console.log(err.response.data);
      }
    });
};

export const logOut = async () => {
  const token = localStorage.getItem("apiToken");
  localStorage.clear();
  const data = await axios.post(
    BASE_API_URL + "/user/logout",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );

  toast.success(data.data);
  return data.data;
};
