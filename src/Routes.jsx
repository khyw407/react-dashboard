import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Kubernetes as KubernetesView,
  Infrastructure as InfrastructureView,
  Incident as IncidentView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={KubernetesView}
        exact
        layout={MainLayout}
        path="/kubernetes/cluster"
      />
      <RouteWithLayout
        component={InfrastructureView}
        exact
        layout={MainLayout}
        path="/infrastructure"
      />
      <RouteWithLayout
        component={IncidentView}
        exact
        layout={MainLayout}
        path="/incident"
      />
    </Switch>
  );
};

export default Routes;
