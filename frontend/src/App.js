import React from 'react';
import { AuthProvider } from './AuthContext';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import Assets from './pages/Assets';
import ExploreProjects from './pages/ExploreProjects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SecureRoute from './SecureRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App () {
  const [authDetails, setAuthDetails] = React.useState(sessionStorage.userToken);

  function setAuth (token) {
    sessionStorage.userToken = token;
    setAuthDetails(token)
  }

  return (
    <AuthProvider value={authDetails}>
      <BrowserRouter style={{background: '#ededed'}}>
        <NavBar authDetails={authDetails}/>
        <Switch>
          <Route
            path='/login'
            render={(props) => {
              return <Login {...props} setAuth={setAuth} />;
            }}
          />
          <Route
            path='/register'
            render={(props) => {
              return <Register {...props} setAuth={setAuth} />;
            }}
          />
          <Route exact path='/assets' component={Assets}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/explore-projects' component={ExploreProjects}/>
          <Route exact path='/product/:projectid' component={Product}/>
        </Switch>
        <Footer setAuth={setAuth}/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
