import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./testAction";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  //state is from testReducer.js
  data: state.test.data,
  loading: state.async.loading
});

const action = {
  incrementAsync,
  decrementAsync,
  openModal
};

class TestComponent extends Component {
  state = {
    myLatLng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handleChangeLatLng = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      //.then(latLng => console.log('Success', latLng))
      .then(latLng => {
        this.setState({
          myLatLng: latLng
        });
      })
      .catch(error => console.error("Error", error));
  };
  render() {
    const { data, incrementAsync, decrementAsync, openModal, loading } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is : {data}</h3>
        <Button loading={loading} onClick={incrementAsync} positive content='Increment' />
        <Button loading={loading} onClick={decrementAsync} negative content='Decrement' />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color='teal'
          content='Open Modal'
        />
        <br />
        <br />
        <TestPlaceInput getLatLng={this.handleChangeLatLng} />
        <SimpleMap
          key={this.state.myLatLng.lng}
          myLatLng={this.state.myLatLng}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  action
)(TestComponent); //we pass in the mapStateToProps function which tell us what we want to get from our store. TestComponent as another parameter to our connect higher order function, this is going to return test component with the properties from the store.
