import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {height: '100%'},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 700
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Info = props => {
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
                    Cluster
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
                className={classes.item}
                item
                md={6}
                sm={6}
                xs={12}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    gitVersion
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                >
                    v1.13.5-6+d6ea2e3ed7815b
                </Typography>
            </Grid>
            <Grid
                className={classes.item}
                item
                md={6}
                sm={6}
                xs={12}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    goVersion
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                >
                    go1.11.5
                </Typography>
            </Grid>
            <Grid
                className={classes.item}
                item
                md={6}
                sm={6}
                xs={12}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    gitCommit
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                >
                    d6ea2e3ed7815b9b53d854038041f43b0a98555e
                </Typography>
            </Grid>
            <Grid
                className={classes.item}
                item
                md={6}
                sm={6}
                xs={12}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    Platform
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                >
                    linux/amd64
                </Typography>
            </Grid>
            <Grid
                className={classes.item}
                item
                md={6}
                sm={6}
                xs={12}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    Built
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                >
                    2019-09-19
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Info.propTypes = {
  className: PropTypes.string
};

export default Info;
