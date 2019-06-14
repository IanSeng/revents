import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'> {/*container need a className*/} 
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
