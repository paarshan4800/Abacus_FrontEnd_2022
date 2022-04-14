import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, path, ...rest }) => {
  console.log("hellllllo");
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        console.log("hi");
        if (auth) {
          console.log("hello");
          return <Component {...props} />;
        } else {
          return <Redirect to="/login"></Redirect>;
        }
      }}
    />
  );
};

export default ProtectedRoute;
