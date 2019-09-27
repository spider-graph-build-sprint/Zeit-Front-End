import { Field, Form, withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addGraph } from "../reducers/graphs/actions";

const AddGraph = ({ history, addGraph, errors, touched, status }) => {
  return (
    <div className="addGraph-form">
      <div className="addGraphFormTitle">welcome back</div>
      <Form>
        <Field type="text" name="name" placeholder="Graph Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field type="text" name="leg1" placeholder="leg1" />
        {touched.leg1 && errors.leg1 && <p className="error">{errors.leg1}</p>}
        <Field type="text" name="leg2" placeholder="leg2" />
        {touched.leg2 && errors.leg2 && <p className="error">{errors.leg2}</p>}
        <Field type="text" name="leg3" placeholder="leg3" />
        {touched.leg3 && errors.leg3 && <p className="error">{errors.leg3}</p>}

        <button type="submit">Add Graph</button>
      </Form>
    </div>
  );
};
const FormikLoginForm = withFormik({
  mapPropsToValues({ name, leg1, leg2, leg3 }) {
    return {
      name: name || "",
      leg1: leg1 || "",
      leg2: leg2 || "",
      leg3: leg3 || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must add a name"),
    leg1: Yup.string().required("You must enter the legs"),
    leg2: Yup.string().required("You must enter the legs"),
    leg3: Yup.string().required("You must enter the legs")
  }),
  //You can use this to see the values
  handleSubmit(values, { props }) {
    console.log("values", values);
    const name = values.name;
    const leg1 = values.leg1;
    const leg2 = values.leg2;
    const leg3 = values.leg3;

    props.addGraph({ name, legs: [leg1, leg2, leg3] }, props.history);
  }
})(AddGraph);

const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapPropsToState,
  { addGraph }
)(FormikLoginForm);
