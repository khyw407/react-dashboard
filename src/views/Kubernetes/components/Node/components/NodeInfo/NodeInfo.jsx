import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider,
  Table, TableBody, TableCell, TableHead, TableRow,
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
    minWidth: 900
  },
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  tableHead: {
      backgroundColor: '#fafafa'
  },
  tableCell: {
    fontWeight: 900,
    fontSize: 'large',
  }
}));

const NodeInfo = props => {
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
                    Node List
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
                <Table>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableCell}>column1</TableCell>
                            <TableCell className={classes.tableCell}>column2</TableCell>
                            <TableCell className={classes.tableCell}>column3</TableCell>
                            <TableCell className={classes.tableCell}>column4</TableCell>
                        </TableRow>
                    </TableHead>
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

NodeInfo.propTypes = {
  className: PropTypes.string
};

export default NodeInfo;
