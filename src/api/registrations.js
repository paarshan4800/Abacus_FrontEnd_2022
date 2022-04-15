import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_API_URL } from "./auth";

export const getListOfEventRegistrations = async () => {
  const details = await axios
    .get(BASE_API_URL + "/user/registration/", {
      headers: {
        Authorization: localStorage.getItem("apiToken"),
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem(
          "registrations",
          JSON.stringify(response.data.registrations)
        );
        localStorage.setItem(
          "eventPass",
          JSON.stringify(response.data.hasEventPass)
        );
      }
    })
    .catch((err) => {
      console.log("the error is", err.response);
      toast.error("" + err);
    });

  return details;
};

export const getEventPass = async () => {
  const token = localStorage.getItem("apiToken");
  const data = await axios({
    method: "put",
    url: BASE_API_URL + "/user/registration/eventpass",
    headers: {
      Authorization: token,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        toast.success(response.data.message);
        if (response.data.body.success === true) {
          setTimeout(() => {
            window.location.href = response.data.body.payment_request.longurl;
          }, 300);
        }
      }
    })
    .catch((err) => {
      toast.error("" + err.response.data.message);
      return 400;
    });
  return data;
};

export const eventRegistration = async (id, name) => {
  const token = localStorage.getItem("apiToken");
  const data = await axios({
    method: "put",
    url: BASE_API_URL + "/user/registration/event/" + id,
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        toast.success(response.data.message);
        return 200;
      }
    })
    .catch((err) => {
      toast.error("" + err.response.data.message);
      return 400;
    });
  return data;
};

export const paymentConfirmation = async (details) => {
  const token = localStorage.getItem("apiToken");
  const data = await axios
    .post(BASE_API_URL + "/payments/confirmation", details, {
      headers: { Authorization: token },
    })
    .then(function (response) {
      return response.data;
    })
    .catch((err) => {
      toast.error("" + err);
      return err.response.data;
    });

  return data;
};

export const workshopRegistration = () => {
  toast("Registrations will begin soon");
};
