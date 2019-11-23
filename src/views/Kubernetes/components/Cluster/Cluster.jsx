import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  Cpu, DaemonSet, Deployment, Info, Memory, Namespace, Pod, Usage
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Cluster = () => {
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
          <Info />
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <Usage />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Cpu />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Memory />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Pod />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Namespace />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <DaemonSet />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Deployment />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cluster;
