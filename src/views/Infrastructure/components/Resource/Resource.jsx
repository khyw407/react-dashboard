import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  Container, Host
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Resource = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <Container />
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <Host />
        </Grid>
      </Grid>
    </div>
  );
};

export default Resource;
