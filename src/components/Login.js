import { Field, Form, withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { login } from "../reducers/auth/actions";

const Login = ({ errors, touched }) => {
  return (
    <Form className="signUp">
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="Enter username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
          type="password"
          name="password"
          placeholder="Password must be 6 characters or more"
        />
      </div>
      <button type="submit">Login</button>
    </Form>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your name."),
    password: Yup.string()
      .min(6, "Password must be 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { props }) {
    props.login(values, props.history);
  }
})(Login);

export default connect(
  null,
  { login }
)(FormikLogin);
