import React from 'react'
import { Form, Label, Select} from 'semantic-ui-react'

const SeletInput = ({input, type, placeholder, multiple, options, meta: {touched, error}}) => {
    return (
    <Form.Field error={touched && !!error}>
      <Select 
      value={input.value || null} //if there is no input it will be null
      onChange={(e, data)=> input.onChange(data.value)} //e represent the event itself, data is the item from the drop down list 
      placeholder={placeholder}
      options={options}
      multiple={multiple}
      
      />
      {touched && error && (
          <Label basic color='red'>
            {error}
          </Label>
        )}
    </Form.Field>
    )
}

export default SeletInput
