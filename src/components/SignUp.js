import React from "react";
import * as Yup from "yup";
import {withFormik, Form, Field} from "formik";
import axios from "axios";

const SignUpForm = ({values, errors, touched, isSubmitting}) => {
    return (
        <Form className="signUpForm">
            <div>
                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                <Field type="text" name="firstName" placeholder="Enter first name"/>
            </div>
            <div>
                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                <Field type="text" name="lastName" placeholder="Enter last name"/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Enter email"/>
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Enter password"/>
            </div>
            <button disabled={isSubmitting}>Sign up</button>
        </Form>
    );
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({firstName, lastName, email, password}) {
        return {
            email: email || "",
            firstName: firstName || "",
            lastName: lastName || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email required"),
        password: Yup.string()
            .min(16, "Password must be 16 characters")
            .required("Password is required")
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        axios
            .post("https://example.com", values)
                .then(res => {
                    console.log(res);
                    resetForm();
                })
                .catch(err => {
                    console.log(err);
                })
            setSubmitting(false);
    }
})(SignUpForm);

export default FormikSignUpForm;