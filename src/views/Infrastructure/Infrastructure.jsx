import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors, Typography } from '@material-ui/core';
import { Container, Host, Resource } from './components'

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

const Infrastructure = props => {
  const { match, history } = props;
  const classes = useStyles();
  const tab = { value: match.url.split('/')[2], label: `${match.url.split('/')[2].charAt(0).toUpperCase()}${match.url.split('/')[2].substring(1)}`};

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'host', label: 'Host' },
    { value: 'container', label: 'Container' },
    { value: 'resource', label: 'Resource' },
  ];

  if (!tab) {
    return <Redirect to={`/infrastructure/host`} />;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">Infrastructure</Typography>
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
            {tab.value === 'host' && <Host />}
            {tab.value === 'container' && <Container />}
            {tab.value === 'resource' && <Resource />}
        </div>
    </div>
  );
};

Infrastructure.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Infrastructure;
