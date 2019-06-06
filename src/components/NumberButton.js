import React from 'react';
import Button from '@material-ui/core/Button';

function NumberButton(props) {
  return(
    <Button variant="contained" color="primary" onClick={() => props.onClick()}>{props.n}</Button>
  );
}

export default NumberButton;