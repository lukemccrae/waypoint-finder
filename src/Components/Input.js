import React, {Component} from 'react';
import { TextField } from '@material-ui/core';




class Input extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
    }

  }


  render(props) {
    return (
      <TextField
      id="outlined-secondary"
      label="FIX"
      variant="outlined"
      color="secondary"
    />
    )
  }

}

export default Input;
