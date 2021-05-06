import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import lapi from "../../assets/lapi.png";
import Banner from "../UI_Kits/Banner.jsx";
import ButtonSubmit from "../UI_Kits/ButtonSubmit";
import Input from "../UI_Kits/Input";

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
    width: 350,
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
    fontWeight: 600,
    marginTop: 20,
    color: "#8e8e8e"
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

export default function SignUp(props) {
  const classes = useStyles();
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    checkConfirmPassword: false
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value
    });

    if (name === "confirmPassword") {
      setCheckConfirmPassword(value === values.password);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Container className={classes.root}>
      <Banner />

      <Grid item container alignItems="center" xs={12} sm={6} md={5} lg={4}>
        <div className={classes.container}>
          <div className={classes.content}>
            <img className={classes.image} src={lapi} />

            <React.Fragment>
              <Typography component="h1" variant="h5" className={classes.h5}>
                Tạo tài khoản ngay! <br />
                Mua sắm liền tay!
              </Typography>

              <Input
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                label="Email"
                error={null}
                startAdornment={<EmailIcon color="primary" />}
              />

              <Input
                name="password"
                type={values.showPassword ? "text" : "password"}
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
              ></Input>

              <Input
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                error={
                  values.confirmPassword === "" ? null : !checkConfirmPassword
                }
                startAdornment={<ConfirmationNumberIcon color="primary" />}
                endAdornment={
                  values.confirmPassword ===
                  "" ? null : !checkConfirmPassword ? (
                    <ErrorIcon color="error" />
                  ) : (
                    <CheckCircleIcon color="primary" />
                  )
                }
              ></Input>

              <ButtonSubmit
                name="Sign Up"
                disabled={
                  !(
                    values.email !== "" &&
                    values.password !== "" &&
                    values.confirmPassword !== "" &&
                    checkConfirmPassword
                  )
                }
              />

              <Link href="/SignIn" className={classes.link}>
                Already have an account? Sign in
              </Link>
            </React.Fragment>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
