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
    fontWeight: "bold",
    color: "#36a3f7"
  },
  title: {
    fontWeight: 700
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Scheduler = props => {
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
              Scheduler
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h3" className={classes.content}>True</Typography>
      </CardContent>
    </Card>
  );
};

Scheduler.propTypes = {
  className: PropTypes.string
};

export default Scheduler;
