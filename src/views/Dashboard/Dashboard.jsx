import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import {
  Controller, ETCD, Scheduler, Namespace, Node, EventError, Host, DockerContainer, DaemonSet, Deployment, ReplicaSet, StatefulSet, Pod, ClusterCPUUtilization, ClusterMemoryUtilization, ClusterPodUtilization, Service
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
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Typography variant="h6">Kubernetes Cluster</Typography>
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Controller />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <ETCD />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Scheduler />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Node />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Namespace />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <EventError />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Typography variant="h6">Infrastructures</Typography>
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
        <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={12}
        >
          <DockerContainer />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Typography variant="h6">Kubernetes Workloads</Typography>
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <DaemonSet />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Deployment />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <ReplicaSet />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <StatefulSet />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Pod />
        </Grid>
        <Grid
          item
          lg={2}
          sm={4}
          xl={2}
          xs={12}
        >
          <Service />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <ClusterCPUUtilization />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <ClusterMemoryUtilization />
        </Grid>
        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <ClusterPodUtilization />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Controller />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Controller />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Controller />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Controller />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
