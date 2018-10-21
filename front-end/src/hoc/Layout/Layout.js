import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {


	render() {
		return (
			<Aux>
				<div>Toolbar</div>
				<main className={"Content"}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

// export default connect( mapStateToProps )( Layout );
export default Layout;