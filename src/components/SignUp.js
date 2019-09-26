import { Field, Form, withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { register } from "../reducers/auth/actions";

const SignUp = ({ values, errors, touched, isSubmitting }) => {
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
      <button disabled={isSubmitting}>Sign up</button>
    </Form>
  );
};

const FormikSignUp = withFormik({
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
    const user = {
      username: values.username,
      password: values.password
    };
    props.register(user, props.history);
  }
})(SignUp);

export default connect(
  null,
  { register }
)(FormikSignUp);
