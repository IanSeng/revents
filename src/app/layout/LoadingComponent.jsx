import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent = ({ inverted = true }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content='Loading' />
    </Dimmer>
  );
};

export default LoadingComponent;
