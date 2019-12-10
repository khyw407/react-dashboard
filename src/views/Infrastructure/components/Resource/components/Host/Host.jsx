import React from 'react';
import clsx from 'clsx';
import { Bubble } from 'react-chartjs-3';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  },
  title: {
    fontWeight: 700
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Host = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const data = {
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:10,y:20,r:5}, {x:50,y:10,r:5}, {x:30,y:60,r:5}, {x:40,y:40,r:5}, {x:5,y:10,r:5}, {x:90,y:90,r:5}]
      }
    ]
  };

  const options = {
    legend: {
      display: false
    }
  }

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
              Host
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <div className={classes.chartContainer}>
            <Bubble
                data={data}
                options={options}
            />
        </div>
      </CardContent>
    </Card>
  );
};

Host.propTypes = {
  className: PropTypes.string
};

export default Host;
