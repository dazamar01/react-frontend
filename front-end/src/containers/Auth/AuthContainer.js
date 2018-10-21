import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Aux from '../../hoc/Aux/Aux';

import './Auth.css';

class Auth extends Component {
	state = {
		username: '',
		password: ''
	}

	updateinputHandler = type => event => {
		this.setState({ [type]: event.target.value });
	}

	login = () => {
		console.log('login');
	}

	render() {
		return (
			<Aux>
				<div className="container">
					<div className="col-md-12">
						<h2>Acceso</h2>
					</div>
					<div className="centered">
						<FormGroup>
							<FormControl
								type='email'
								value={this.state.username}
								placeholder='Correo electrónico'
								onChange={this.updateinputHandler('username')}
							/>
							<br />
							<FormControl
								type='password'
								value={this.state.password}
								placeholder='Contraseña'
								onChange={this.updateinputHandler('password')}
							/>
						</FormGroup>

						<Button
							className="btn btn-primary pull-right"
							onClick={this.login}>Ingresar</Button>

					</div>
				</div>
			</Aux>

		);

	}
}

export default Auth;
