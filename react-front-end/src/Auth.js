import history from './history';
import { CONNECTION } from './config';
import { URL_LOGIN } from './config';

let respuesta = 403;  //al inicio es no permitido

class Auth {
  loggedIn = false;
  
  jwt = "";

  authenticate = (username, password, type) => {

    fetch(`${URL_LOGIN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      mode: 'cors',
      cache: 'default'
    }).then(response => {
      const statusCode = response.status;
      respuesta = statusCode;
      // Authorization 
      const headers = response.headers;
      console.log(headers);

    }).then(json => {
        
        if (respuesta !== 200) {
          alert("Acceso no permitido");
        } else {
          this.loggedIn = true;
          history.replace('/callback');
        }
        
      });
  }

  signup = (username, password) => {
    this.authenticate(username, password, 'new');
  }

  login = (username, password) => {
    this.authenticate(username, password, 'login');
  }

  logout = () => {
    fetch(`${CONNECTION}/user/logout`, {
      credentials: 'include'
    }).then(res => res.json())
      .then(() => {
        this.loggedIn = false;
        history.replace('/');
      });
  }

  checkAuthentication = () => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: ''
      }).then(response => response.text())
        .then(response => {

          console.log('json', response)
          let sucees = false;
          if (sucees) {
            this.loggedIn = true;
          }
          resolve();
        })
        .catch( (err) => {
          console.log("Error!",err);
          this.loggedIn = false;
          reject();
        })
        ;
    });
  }
};

export default Auth;