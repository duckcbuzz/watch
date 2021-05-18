import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import Banner from "../UI_Kits/Banner";
import ButtonSubmit from "../UI_Kits/ButtonSubmit.jsx";
import Input from "../UI_Kits/Input.jsx";
import Logo from "../UI_Kits/Logo";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(8, 4)
  },
  username: {
    width: 350,
    marginTop: theme.spacing(2)
  },
  password: {
    maxWidth: 350,
    marginTop: theme.spacing(2)
  },
  button: {
    width: "100%",
    minHeight: theme.spacing(5),
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  h5: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 550,
    marginTop: 20
  },
  link: {
    color: "#3578b7",
    marginTop: 10
  },
  image: {
    width: 150,
    height: 100
  }
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Container className={classes.root}>
      <Grid item container alignItems="center" xs={12} sm={6} md={5} lg={4}>
        <div className={classes.container}>
          <div className={classes.content}>
            <React.Fragment>
              <Typography variant="h5" gutterBottom className={classes.h5}>
                Sign In
              </Typography>

              <Input
                name="email"
                type="text"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                label="Email"
                error={null}
                startAdornment={<EmailIcon color="primary" />}
              />

              <Input
                name="password"
                type={values.showPassword ? "text" : "password"}
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                label="Password"
                error={null}
                startAdornment={<LockIcon color="primary" />}
                endAdornment={
                  <IconButton onClick={handleClickShowPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />

              <ButtonSubmit
                name="Sign In"
                disabled={!(values.email && values.password)}
              />

              <Link href="/forgot-password" className={classes.link}>
                Forgot Password?
              </Link>

              <Link href="/SignUp" className={classes.link}>
                Don't have an account? Sign Up
              </Link>
            </React.Fragment>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
