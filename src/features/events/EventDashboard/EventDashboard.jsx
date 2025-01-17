import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  /*handleIsOpenToogle = () => {
    // this is an arrow function
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen //isOpen is the opposite of isOpen the previous state is also an object
    }));
  }; */

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events, loading } = this.props;

    if (loading) return <LoadingComponent />;

    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <h2>Event List</h2>
            <EventList events={events} deleteEvent={this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Event Activity</h2>
            <EventActivity />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{collection: "events" }])(EventDashboard));
