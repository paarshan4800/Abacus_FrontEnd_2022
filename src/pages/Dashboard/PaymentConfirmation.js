import React from "react";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { paymentConfirmation } from "../../api/registrations";
import Dashboard from "./Dashboard";
export default function PaymentConfirmation() {
  useEffect(async () => {
    const url = new URL(window.location.href);

    const searchparams = new URLSearchParams(url.search);
    if (searchparams.has("payment_id")) {
      const details = {
        paymentId: searchparams.get("payment_id"),
        paymentStatus: searchparams.get("payment_status"),
        paymentRequestId: searchparams.get("payment_request_id"),
      };
      const data = await paymentConfirmation(details);
      if (data.success != undefined && data.success === true) {
        toast.success("Payment Has Been Made successfully.");
      }
    }
  }, []);

  return (
    <div>
      <p>Hello</p>
      <Dashboard />
    </div>
  );
}
