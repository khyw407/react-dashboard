import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WbSunny from '@material-ui/icons/WbSunny';
import Storage from '@material-ui/icons/Storage';
import Notifications from '@material-ui/icons/Notifications'

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Kubernetes',
      href: '/kubernetes',
      icon: <WbSunny />,
      subPages: [
        {title: 'Cluster', href: '/cluster'},
        {title: 'Node', href: '/node'},
        {title: 'Workload', href: '/workload'},
        {title: 'Daemonset', href: '/daemonset'},
        {title: 'Deployment', href: '/deployment'},
        {title: 'Pod', href: '/pod'},
        {title: 'Replicaset', href: '/replicaset'},
        {title: 'Statefulset', href: '/statefulset'},
        {title: 'Services', href: '/services'}
      ]
    },
    {
      title: 'Infrastructure',
      href: '/infrastructure',
      icon: <Storage />,
      subPages: [
        {title: 'Host', href: '/host'},
        {title: 'Container', href: '/container'},
        {title: 'Resource', href: '/resource'}
      ]
    },
    {
      title: 'Incident Manager',
      href: '/incidentManager',
      icon: <Notifications />,
      subPages: [
        {title: 'Event Trace', href: '/trace'},
        {title: 'Event Map', href: '/map'},
        {title: 'Rule Set Manager', href: '/rule'}
      ]
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
