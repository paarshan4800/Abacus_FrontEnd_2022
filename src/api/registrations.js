import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_API_URL } from "./auth";

export const getListOfEventRegistrations = async () => {
  console.log(localStorage.getItem("apiToken"));
  const details = await axios
    .get(
      BASE_API_URL + "/user/registrations",
      {},
      {
        headers: {
          Authorization: localStorage.getItem("apiToken"),
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((err) => {
      //console.log("the error is", err);
      toast.error("Error getting details");
    });

  return details;
};

export const workshopRegistration = () => {
  toast("Registrations will begin soon");
};
