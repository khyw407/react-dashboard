import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider,
  Table, TableBody, TableCell, TableRow, ListItemIcon, ListItemText, colors
} from '@material-ui/core';
import mockData from './data';

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
  },
  critical: {
    '& $indicator': {
      borderColor: colors.red[600]
    }
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.cyan[500],
    borderRadius: '50%'
  },
  listItemText: {
    marginRight: theme.spacing(1)
  }
}));

const Deployment = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [list] = useState(mockData);

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
                    Deployments [6/6]
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner} style={{ overflow: 'auto', height: '350px' }}>
                <Table>
                    <TableBody>
                        {list.map((item, i) => (
                          <TableRow>
                            <TableCell>
                              <ListItemIcon>
                                  <span className={classes.indicator} />
                              </ListItemIcon>
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.name}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.namepace}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>[{item.count}]</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.updatedAt.toString()}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

Deployment.propTypes = {
  className: PropTypes.string
};

export default Deployment;
