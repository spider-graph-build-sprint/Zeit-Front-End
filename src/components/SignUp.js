import axios from "axios";
import { Field, Form, withFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUp = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="signUp">
      {/* <div>
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        <Field type="text" name="firstName" placeholder="Enter first name" />
      </div>
      <div>
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        <Field type="text" name="lastName" placeholder="Enter last name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Enter email" />
      </div> */}
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
      //   email: email || "",
      //   firstName: firstName || "",
      //   lastName: lastName || "",
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
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    const register = {
      username: values.username,
      password: values.password
    };
    axios
      .post("https://spider-back-end.herokuapp.com/api/auth/register", register)
      .then(res => {
        console.log(res);
        // resetForm();
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
    setSubmitting(false);
  }
})(SignUp);

export default FormikSignUp;
