import React from 'react';
import Button from '@material-ui/core/Button';

function PlusButton(props) {
  return(
    <Button variant="contained" color="primary" onClick={() => props.onClick()}>+</Button>
  );
}

export default PlusButton;