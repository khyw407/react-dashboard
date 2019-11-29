import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, colors
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

const Namespace = props => {
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
                    Namespaces [4/4]
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <List>
            {list.map((item, i) => (
                <ListItem
                    divider={i < item.length - 1}
                    key={item.id}
                >
                    <ListItemIcon>
                        <span className={classes.indicator} />
                    </ListItemIcon>
                    <ListItemText
                        className={classes.listItemText}
                        primary={item.name}
                    />
                    <ListItemText
                        className={classes.listItemText}
                        primary={item.updatedAt.toString()}
                    />
                </ListItem>
            ))}
          </List>
      </CardContent>
    </Card>
  );
};

Namespace.propTypes = {
  className: PropTypes.string
};

export default Namespace;
