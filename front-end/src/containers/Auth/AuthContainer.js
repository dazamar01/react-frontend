import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button, FormGroup, FormControl } from 'react-bootstrap';

import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';

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
		console.log('Starting the login process');
		this.props.onAuth( this.state.username, this.state.password, this.state.isSignedUp );
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

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		
		authRedirectPath: state.auth.authRedirectPath
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignedUp) => dispatch(actions.auth(email, password, isSignedUp)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
