import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { AuthApi } from "./App";

// import Cookies from "js-cookie";
import Homepage from "./pages/Homepage/Homepage";
import EventsHome from "./pages/Events/EventsHome";
import WorkshopsList from "./pages/Workshops/WorkshopsList";
import EventDetails from "./pages/Events/EventDetails";
import TechEventsList from "./pages/Events/TechEventsList";
import NonTechEventsList from "./pages/Events/NonTechEventsList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import Hackathon from "./pages/Events/Hackathon";
import WorkshopDetails from "./pages/Workshops/WorkshopDetails";
import LoginRegister from "./pages/Login/LoginRegister";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import SignInForm from "./pages/Login/pages/SignInForm";
import SignUp from "./pages/Login/pages/SignUp";
import ForgotPassword from "./pages/Login/pages/ForgotPassword";
import NewPassword from "./pages/Login/pages/NewPassword";
// import ResetPassword from "./pages/ResetPassword/ResetPassword.js";
// import Navbar from "./components/Navbar/Navbar";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import GoogleFormData from "./pages/GoogleFormData/GoogleFormData";
// import HackathonForm from "./components/HackathonForm/HackathonForm";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  //   const Auth = React.useContext(AuthApi);

  return (
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
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/events" exact component={EventsHome} />
      <Route path="/events/hackathon" exact component={Hackathon} />
      <Route path="/events/tech-events" exact component={TechEventsList} />
      <Route
        path="/events/non-tech-events"
        exact
        component={NonTechEventsList}
      />
      <Route path="/events/:type/:title" exact component={EventDetails} />
      <Route path="/workshops" exact component={WorkshopsList} />
      <Route path="/workshops/:title" exact component={WorkshopDetails} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/404" exact component={PageNotFound} />
      <Route path="/Login" exact component={LoginRegister} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/ForgotPassword" exact component={ForgotPassword} />
      <Route path="/NewPassword" exact component={NewPassword} />
      {/* <Route path="/Login" exact component={LoginRegister} /> */}

      {/*
      <Route path="/Login" exact component={LoginRegister} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/login-register" exact component={LoginRegister} />
      <Route path="/google-form-data" exact component={GoogleFormData} />  */}

      {/* <ProtectedRoute
        path="/dashboard"
        auth={Auth}
        exact
        component={Dashboard}
      /> */}
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
};

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (auth) {
          return <Component />;
        } else {
          return <Redirect to="/login-register"></Redirect>;
        }
      }}
    />
  );
};

export default AppRoutes;
