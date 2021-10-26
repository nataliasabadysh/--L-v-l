import { Route, Redirect } from "react-router-dom";

export const PrivetRouter = ({
  isAuthenticated,
  redirectTO,
  component: Component,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      exact
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTO} />
        )
      }
    />
  );
};