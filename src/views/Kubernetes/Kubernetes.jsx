import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors, Typography } from '@material-ui/core';
import { Cluster, Daemonset, Deployment, Node, Pod, Replicaset, Service, Statefulset, Workload } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Kubernetes = props => {
  const { match, history } = props;
  const classes = useStyles();
  const tab = { value: match.url.split('/')[2], label: `${match.url.split('/')[2].charAt(0).toUpperCase()}${match.url.split('/')[2].substring(1)}`};

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'cluster', label: 'Cluster' },
    { value: 'node', label: 'Node' },
    { value: 'workload', label: 'Workload' },
    { value: 'daemonset', label: 'Daemonset' },
    { value: 'deployment', label: 'Deployment' },
    { value: 'pod', label: 'Pod' },
    { value: 'replicaset', label: 'Replicaset' },
    { value: 'statefulset', label: 'Statefulset' },
    { value: 'service', label: 'Service' },
  ];

  if (!tab) {
    return <Redirect to={`/kubernetes/cluster`} />;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">Kubernetes Cluster</Typography>
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab.value}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
        <div className={classes.content}>
            {tab.value === 'cluster' && <Cluster />}
            {tab.value === 'node' && <Node />}
            {tab.value === 'workload' && <Workload />}
            {tab.value === 'daemonset' && <Daemonset />}
            {tab.value === 'deployment' && <Deployment />}
            {tab.value === 'pod' && <Pod />}
            {tab.value === 'replicaset' && <Replicaset />}
            {tab.value === 'statefulset' && <Statefulset />}
            {tab.value === 'service' && <Service />}
        </div>
    </div>
  );
};

Kubernetes.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Kubernetes;
