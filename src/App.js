import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import EventRegistration from "./Components/EventRegistration/EventRegistration";
import SelectedEvent from "./Components/SelectedEvent/SelectedEvent";
import Admin from "./Components/Admin/Admin";
import AddEvent from "./Components/AddEvent/AddEvent";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// create context api
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [card, setCard] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
      return () => {
        //perform clean action;
        unsubscribe();
      };
    });
  }, []);

  console.log(loggedInUser);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user: { loggedInUser, setLoggedInUser },
          card: { card, setCard },
        }}
      >
        <p>email: {loggedInUser.email} </p>

        <Router>
          {/* <Home></Home> */}

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            {/* <PrivateRoute exact path="/eventRegistration/:taskId">
              <EventRegistration />
            </PrivateRoute> */}

            {/* <PrivateRoute exact path="/eventRegistration">
          <EventRegistration ></EventRegistration>
          </PrivateRoute>  */}

            <PrivateRoute
              exact
              path="/eventRegistration"
              component={EventRegistration}
            ></PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="/selectedEvent">
              <SelectedEvent></SelectedEvent>
            </Route>

            <Route path="/admin">
              <Admin></Admin>
            </Route>

            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* <Route exact path="*">
          <NotFound></NotFound>
        </Route> */}
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
