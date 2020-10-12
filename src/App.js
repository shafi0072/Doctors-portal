import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Appointment from './Components/Appointment/Appointment/Appointment';
import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import Home from './Components/Home/Home/Home';
import Login from './Components/LogIn/Login';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/dashboard'>
          <DashboardMain/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
