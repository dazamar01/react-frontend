import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {


	render() {
		return (
			<Aux>
				<ul >
					<li className="NavigationItem">
					{this.props.isAuthenticated ?
						<NavLink to="/logout">Salir</NavLink>
						: null}
					</li>
				</ul>
				<main className={"Content"}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);
// export default Layout;