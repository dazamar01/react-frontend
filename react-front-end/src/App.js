import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Logout from './components/Logout';


const Home = props => (
  <div>
    <h2>Foodie Hub</h2>
    <div>
      <Link to="/captura">Captura</Link>
    </div>
    <br />
    <Logout {...props} />
  </div>
);

const App = props => (
  <div>
    {props.auth.loggedIn ? <Home {...props} /> : <AuthForm {...props} />}
  </div>
);

export default App;
