import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import {
  Controller
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">Kubernetes Cluster</Typography>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Controller />
        </Grid>
      </Grid>
      <Typography variant="h6">Kubernetes Workloads</Typography>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Controller />
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Controller />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
