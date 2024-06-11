
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '~/hooks/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
        //   <Redirect to="/login" />
          <>{navigate('/login')}</>
        )
      }
    />
  );
}
export default PrivateRoute;