import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' />
            {format(event.date.toDate(), "EEEE do LLL")} at {""}
            {format(event.date.toDate(), "h:mm a")} |
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttendee key={index} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={() => deleteEvent(event.id)} //arrow function so that it is not immediately execute when we render the comporent, this is to handle methods that we need to pass parameters out
            as='a'
            color='red'
            floated='right'
            content='Delete'
          />
          <Button
            //onClick={() => selectEvent(event)} //arrow function so that it is not immediately execute when we render the comporent, this is to handle methods that we need to pass parameters out

            as={Link}
            to={"/events/" + event.id}
            color='teal'
            floated='right'
            content='View'
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
