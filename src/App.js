import React, { Fragment } from "react";
import Navbar from "./components/_layout/Navbar";
import UserList from "./components/users/UserList";
import Search from './components/users/Search';
import Alert from './components/_layout/Alert';
import About from './components/pages/About';
import Profile from './components/users/Profile';
import UsersState from './context/users/State';
import AlertState from './context/alert/State';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <UsersState>
      <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route 
              exact 
              path="/" 
              render={props => (
                <Fragment>
                  <div className="container-fluid bg-secondary text-center p-2 mb-3">
                    <Alert />
                    <Search />
                  </div>
                  <div className="container">
                    <UserList />
                  </div>
                </Fragment>
              )} />
              <Route 
                exact
                path="/about"
                component={About}
              />
              <Route exact path='/user/:username' render={props => (
                <Profile />
              )}/>
          </Switch>
        </div>
      </Router>
      </AlertState>
    </UsersState>
  );
}

export default App;
