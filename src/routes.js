import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { AuthApi } from "./App";

// import Cookies from "js-cookie";
// import Homepage from "./pages/Homepage/Homepage";
// import AboutUs from "./pages/About-Us/AboutUs";
import Homepage from "./pages/Homepage/Homepage"
import Events from "./pages/Events/eventsHome";
import Workshops from "./pages/Workshops/workshopHome";
import EventDetails from "./pages/Events/eventDetails";
// import WorkshopMiddleware from "./pages/Workshops/WorkshopMiddleware";
// import EventTemplate from "./components/EventTemplate/EventTemplate";
import TechEventsList from "./pages/Events/TechEventsList";
import NonTechEventsList from "./pages/Events/NonTechEventsList";
// import EventMiddleware from "./pages/Events/Event/EventMiddleware";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import Hackathon from "./pages/Events/Hackathon";
import WorkshopDetails from "./pages/Workshops/workshopDetails";
// import LoginRegister from "./pages/LoginRegister/LoginRegister.js";
// import ResetPassword from "./pages/ResetPassword/ResetPassword.js";
// import Navbar from "./components/Navbar/Navbar";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import GoogleFormData from "./pages/GoogleFormData/GoogleFormData";
// import HackathonForm from "./components/HackathonForm/HackathonForm";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import Hackathon from "./pages/Hackathon/Hackathon";

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
      {/* <Route path="/about-us" exact component={AboutUs} />  */}
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/events" exact component={Events} />
      <Route path="/workshops" exact component={Workshops} />
      <Route path="/workshops/:id" exact component={WorkshopDetails} />
      <Route path="/events/hackathon" exact component={Hackathon} />
      <Route path="/events/tech-events" exact component={TechEventsList} />


      <Route
        path="/events/non-tech-events"
        exact
        component={NonTechEventsList}
      />
      <Route path="/events/tech-events/:id" exact component={EventDetails} />
      {/*
      <Route path="/workshops/:title" exact component={WorkshopMiddleware} />

      

      <Route path="/event-template" exact component={EventTemplate} />

      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/login-register" exact component={LoginRegister} />
      <Route path="/google-form-data" exact component={GoogleFormData} />  */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/cart" exact component={Cart} />

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
