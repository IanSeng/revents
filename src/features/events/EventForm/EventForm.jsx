import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import Textinput from "../../../app/common/form/Textinput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SeletInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]; //we will take the firest element of the array which will be the only element in our array
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];
class EventForm extends Component {
  

  handleFormSubmit = evt => {
    evt.preventDefault();
    //console.log(this.state); //for debug use
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push("/events/" + this.state.id);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(), //we dont use equal inside an object
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };
  //we use this initially but because evt is an object, so we can distructure the target
  //it is not necessary but it looks cleaner
  /*handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value //[] object bracket notation to access object by a string value
    }); 
  }; */

  

  render() {
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
              <Field
                name='title'
                component={Textinput}
                placeholder='Give your event a name'
              />
              <Field
                name='category'
                component={SelectInput}
                options={category}
                //multiple={true} to select multiple item from dropdown box
                placeholder='What is your event about?'
              />
              <Field
                name='description'
                component={TextArea}
                rows = {3}
                placeholder='Tell us about your event'
              />
              <Header sub color='teal' content='Event Location Details' />
              <Field
                name='city'
                component={Textinput}
                placeholder='Event City'
              />
              <Field
                name='venue'
                component={Textinput}
                placeholder='Event Venue'
              />
              <Field
                name='date'
                component={Textinput}
                placeholder='Event Date'
              />

              <Button positive type='submit'>
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type='button'>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm" })(EventForm));
