import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      //we want to add new event to existing event, we can use spread operator
      //events: [...events, newEvent], //...it will take the existing and new to replace events
      isOpen: false
    })); //we also need to use previous state events that why we do ({events}) =>
  };

  /*handleIsOpenToogle = () => {
    // this is an arrow function
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen //isOpen is the opposite of isOpen the previous state is also an object
    }));
  }; */

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleselectEvent = event => {
    //console.log(event);
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent( updatedEvent);
    this.setState(({ events }) => ({
      //({}) is doing destructring
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <h2>Event List</h2>
            <EventList
              events={events}
              selectEvent={this.handleselectEvent}
              deleteEvent={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleCreateFormOpen}
              positive
              content='Create Event'
            />
            {isOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0} //ternary operator
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                cancelFormOpen={this.handleFormCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
