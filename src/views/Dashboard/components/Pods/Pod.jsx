import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    textAlign: 'center',
    fontWeight: "bold"
  },
  title: {
    fontWeight: 700
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Pod = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Pods
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h3" className={classes.content}>39 / 39</Typography>
      </CardContent>
    </Card>
  );
};

Pod.propTypes = {
  className: PropTypes.string
};

export default Pod;
