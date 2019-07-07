import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import {connect} from 'react-redux'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0] //we will take the firest element of the array which will be the only element in our array
  }

  return {
    event
  }
}

class EventForm extends Component {
  state = {...this.props.event};

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent // use dot operator ... to take all of the individual properties of the object
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    //console.log(this.state); //for debug use
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };
  //we use this initially but because evt is an object, so we can distructure the target
  //it is not necessary but it looks cleaner
  /*handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value //[] object bracket notation to access object by a string value
    }); 
  }; */

  handleInputChange = ({ target: { name, value } }) => {
    //{evt} is an event object
    this.setState({
      [name]: value //[] object bracket notation to access object by a string value
    });
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              onChange={this.handleInputChange}
              value={title}
              placeholder='Event Title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              onChange={this.handleInputChange}
              value={date}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              onChange={this.handleInputChange}
              value={city}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              onChange={this.handleInputChange}
              value={venue}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState) (EventForm);
