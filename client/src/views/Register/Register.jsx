import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import compose from 'ramda/src/compose';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterForm from './RegisterForm';
import environment from '../../environment';
import { inspect } from '../../utils';

const styles = theme => ({
  root: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
  },
});

const handleSubmit = history => values => {
  axios
    .post(`${environment.endpoint}/users`, values)
    .then(() => history.push('/login'))
    .catch(inspect);
};

const Register = ({ classes, history }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <Typography variant="h6">Register</Typography>
      <RegisterForm onSubmit={handleSubmit(history)} />
    </Paper>
  </div>
);

Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(Register);
