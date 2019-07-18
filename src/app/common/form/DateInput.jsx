import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


const DateInput = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  //...rest mean it will contain the rest of the properties that we pass into out date input component
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest} //whatever is in the rest of the properties will pass into our date picker
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange} //input.onChange is property pass down from redux form 
        onBlur={input.onBlur}
        onChangeRaw={(e)=> e.preventDefault()} //user cant no more type into the date picker
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
