import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedinMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";

const actions = {
  openModal,
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    //const { authenticated } = this.state;
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <div>
        <Menu inverted fixed='top'>
          <Container>
            <Menu.Item as={NavLink} exact to='/' header>
              <img src='/assets/logo.png' alt='logo' />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} exact to='/events' name='Events' />
            {authenticated && (
              <Fragment>
                <Menu.Item as={NavLink} to='/people' name='People' />
                <Menu.Item as={NavLink} to='/test' name='Test' />
                <Menu.Item>
                  <Button
                    as={Link}
                    to='/createEvent'
                    floated='right'
                    positive
                    inverted
                    content='Create Event'
                  />
                </Menu.Item>
              </Fragment>
            )}
            {authenticated ? (
              <SignedinMenu
                signOut={this.handleSignOut}
                profile={profile}
              />
            ) : (
              <SignedOutMenu
                signIn={this.handleSignIn}
                register={this.handleRegister}
              />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(
  withFirebase(
    connect(
      mapState,
      actions
    )(NavBar)
  )
);
