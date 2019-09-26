import AppBar from "@material-ui/core/AppBar/index";
import Button from "@material-ui/core/Button/index";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar/index";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../reducers/auth/actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 64
  },
  navBar: {
    display: "flex",
    flexDirection: "center",
    background: "white",
    color: "black",
    boxShadow: "none",
    borderBottom: "1.5px solid #EDEDED"
  },
  title: {
    flexGrow: 1,
    paddingLeft: "1rem",
    color: "#42d868",
    fontFamily: "Nunito"
  },
  logoLink: {
    color: "#00d81b",
    "&:hover": {
      color: "black"
    }
  }
}));

const LinkButton = withStyles(theme => ({
  root: {
    color: "black",
    "&:hover": {
      color: "black"
    }
  }
}))(Button);

const NavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Spider graph
          </Typography>
          {!props.isAuth && (
            <LinkButton component={RouterLink} to="/login">
              Login
            </LinkButton>
          )}
          {!props.isAuth && (
            <LinkButton component={RouterLink} to="/sign-up">
              Sign up
            </LinkButton>
          )}
          {props.isAuth && (
            <LinkButton component={RouterLink} to="/dashboard">
              Dashboard
            </LinkButton>
          )}
          {props.isAuth && (
            <LinkButton component={RouterLink} onClick={() => props.logout()}>
              Logout
            </LinkButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};
export default connect(
  mapPropsToState,
  { logout }
)(NavBar);
