import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider,
  Table, TableBody, TableCell, TableRow,
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
  },
  inner: {
    minWidth: 300
  },
  tableCell: {
    fontWeight: 900,
    fontSize: 'large',
  }
}));

const DaemonSet = props => {
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
                    Daemon Sets [5/5]
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>CPU</TableCell>
                            <TableCell>16</TableCell>
                            <TableCell>1.042</TableCell>
                            <TableCell>6.513%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Memory</TableCell>
                            <TableCell>116.32</TableCell>
                            <TableCell>28.103</TableCell>
                            <TableCell>24.16%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pod</TableCell>
                            <TableCell>440</TableCell>
                            <TableCell>39</TableCell>
                            <TableCell>8.864%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

DaemonSet.propTypes = {
  className: PropTypes.string
};

export default DaemonSet;
