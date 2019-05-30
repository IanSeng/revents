import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm"

class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <h2>Event List</h2>
            <EventList />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button positive content='Create Event'/>
            <EventForm/>
            <h2>Right Column</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
