import React from "react";

import {createUseStyles} from 'react-jss'
import Typography from '@mui/material/Typography';

const useStyles = createUseStyles({
  myLabel: {
    color: 'green',
  }
})

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.myLabel}>
      <Typography>
        Soy un footer uwu
      </Typography>;
    </div>
  );
}

export default Footer;