import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'/*this is for dynamic button*/}
      onClick={props.onClick/*this name is ur wish*/}
  >
  {props.children}
    </button>
  );
};

export default Button;
