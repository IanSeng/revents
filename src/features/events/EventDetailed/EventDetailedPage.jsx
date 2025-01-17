import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]; //we need to specify index [0] of the item from that array eventhough it's just one item posting
  }
  return {
    event
  }
}
const EventDetailedPage = ({event}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event}/>
                <EventDetailedInfo event={event}/>
                <EventDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees}/>
            </Grid.Column>
        </Grid>
    )
}

export default connect(mapState)(EventDetailedPage)
