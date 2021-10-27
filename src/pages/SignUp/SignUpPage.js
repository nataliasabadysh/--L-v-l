// Core
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { routers } from "../../utils/routes";

// Instruments
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Typography } from "@mui/material";
import { createUserAsync } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorSignUp);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "nata@gmail.com",
      name: "Natasha",
      password: "12345678",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      
      dispatch(createUserAsync(values));

      if(!errorMessage){
        history.push(routers.NEWS.path)
      }
    },
  });

  return (
    <div>
      <Typography variant="h3"> Sign up</Typography>

      {errorMessage && errorMessage.message && (
        <div style={{ border: "1px solid red", padding: 10, margin: 20 }}>
          {" "}
          {errorMessage.message}
          <Link to={routers.LOGIN.path}> Go to LogIn page </Link>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          color="primary"
          disabled={formik.isSubmitting}
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
