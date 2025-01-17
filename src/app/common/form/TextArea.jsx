import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows, //to specify number of row in our text area
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  //console.log(input);
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows}/> 
        {touched && error && (
          <Label basic color='red'>
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default TextArea;
