//import './Card.module.css'  =>this import for normal css class not for module
// for module we have give anyname to iteg: below
import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
  //classname containd two main they are {classes.card}=>this is from css module classes.  2){props.className}=>this is from outside of the card inn another files......
};

export default Card;