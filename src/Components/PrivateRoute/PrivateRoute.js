// import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router';
// import { UserContext } from '../../App';

// const PrivateRoute = ({ children, ...rest }) => {

//     let loggedInUser = useContext(UserContext);


//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//         loggedInUser.email ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     );
// };

// export default PrivateRoute;


import React,{ useContext }  from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute = ({component: Component, ...rest }) =>{
  

  let loggedInUser = useContext(UserContext);
  
   return <Route
      {...rest}
      render={(props) =>
        loggedInUser.user.loggedInUser.email ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  
} 

export default PrivateRoute;