import React from "react";
import { Form, Label } from "semantic-ui-react";

const Textinput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default Textinput;
