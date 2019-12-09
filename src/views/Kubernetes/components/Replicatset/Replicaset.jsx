import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  Cpu, List, Memory
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Replicaset = () => {
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
          <Cpu />
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <Memory />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <List />
        </Grid>
      </Grid>
    </div>
  );
};

export default Replicaset;
