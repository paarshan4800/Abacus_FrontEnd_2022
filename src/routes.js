import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthApi } from "./App";

// import Cookies from "js-cookie";
import Homepage from "./pages/Homepage/Homepage";
import EventsHome from "./pages/Events/EventsHome";
import WorkshopsList from "./pages/Workshops/WorkshopsList";
import EventDetails from "./pages/Events/EventDetails";
import TechEventsList from "./pages/Events/TechEventsList";
import NonTechEventsList from "./pages/Events/NonTechEventsList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Hackathon from "./pages/Events/Hackathon";
import WorkshopDetails from "./pages/Workshops/WorkshopDetails";
import LoginRegister from "./pages/Login/LoginRegister";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import HackathonRegister from "./pages/Events/HackathonRegister";
import { Aboutus } from "./components/";
import SignInForm from "./pages/Login/pages/SignInForm";
import SignUp from "./pages/Login/pages/SignUp";
import ForgotPassword from "./pages/Login/pages/ForgotPassword";
import NewPassword from "./pages/Login/pages/NewPassword";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Test from "./pages/Test/Test";
import VerifyEmail from "./pages/Login/pages/VerifyEmail";
import Loading from "./pages/Loading/Loading";

// import ResetPassword from "./pages/ResetPassword/ResetPassword.js";
// import Navbar from "./components/Navbar/Navbar";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import GoogleFormData from "./pages/GoogleFormData/GoogleFormData";
// import HackathonForm from "./components/HackathonForm/HackathonForm";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <ScrollToTop>
      <Switch>
        {/* <Route path="/" exact>
        {Cookies.get("token") !== undefined &&
        Cookies.get("details") !== undefined ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/homepage" />
        )}
      </Route> */}

        <Route path="/" exact component={Homepage} />
        <Route path="/Home" exact component={Homepage} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/events" exact component={EventsHome} />
        <Route path="/events/coding-hungama" exact component={Hackathon} />
        <Route path="/events/tech-events" exact component={TechEventsList} />
        {/* <Route
          path="/events/non-tech-events"
          exact
          component={NonTechEventsList}
        /> */}
        <Route
          path="/events/non-tech-events"
          exact
          component={NonTechEventsList}
        />
        <Route path="/events/:type/:title" exact component={EventDetails} />
        <Route path="/workshops" exact component={ComingSoon} />
        <Route path="/workshops/:title" exact component={ComingSoon} />

        <Route path="/test/:type/:title" exact component={Test} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/login" exact component={ComingSoon} />
        <Route path="/Login/VerifyEmail" exact component={ComingSoon} />
        <Route path="/signUp" exact component={ComingSoon} />
        <Route path="/ForgotPassword" exact component={ComingSoon} />
        <Route
          path="/resetPassword/:resetPassword"
          exact
          component={ComingSoon}
        />
        <Route path="/ComingSoon" exact component={ComingSoon} />
        <Route path="/hackathon-register" exact component={ComingSoon} /> */}
        <Route path="/loading" exact component={Loading} />
        {Auth ? (
          <>
            <Route
              path={[
                "/login",
                "/login/VerifyEmail",
                "/signup",
                "/ForgotPassword",
                "/resetPassword/:resetPassword",
              ]}
              exact
            >
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" exact component={Dashboard} />
          </>
        ) : (
          <>
            <Route path="/login" exact component={LoginRegister} />
            <Route path="/Login/VerifyEmail" exact component={VerifyEmail} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/ForgotPassword" exact component={ForgotPassword} />
            <Route
              path="/resetPassword/:resetPassword"
              exact
              component={NewPassword}
            />
          </>
        )}
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <Route path="/ComingSoon" exact component={ComingSoon} />
        <Route path="/hackathon-register" exact component={HackathonRegister} />
        <Route component={PageNotFound} />
        {/* <Route path="/Login" exact component={LoginRegister} /> */}

        {/*
      <Route path="/Login" exact component={LoginRegister} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/login-register" exact component={LoginRegister} />
      <Route path="/google-form-data" exact component={GoogleFormData} />  */}

        <ProtectedRoute
          path="/dashboard"
          auth={Auth}
          exact
          component={Dashboard}
        />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </ScrollToTop>
  );
};

export default AppRoutes;
